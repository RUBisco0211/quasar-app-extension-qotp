<template>
    <q-scroll-area :style="{ height }">
        <div ref="codeRef" class="q-pa-md preview-code"></div>
    </q-scroll-area>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { codeToHtml } from "shiki";
import { Dark } from "quasar";

const props = withDefaults(
    defineProps<{
        lang: string;
        code: string;
        height?: string;
        fontSize?: string;
    }>(),
    {
        height: "500px",
        fontSize: "16px",
    }
);

const codeRef = ref<HTMLDivElement | null>(null);

const renderHighlightCode = async () => {
    if (!codeRef.value) return;
    codeRef.value.innerHTML = await codeToHtml(props.code, {
        lang: props.lang,
        theme: Dark.isActive ? "github-dark" : "github-light",
    });
};

watch(() => Dark.isActive, renderHighlightCode);
watch(() => props.code, renderHighlightCode);

onMounted(renderHighlightCode);
</script>
<style scoped>
.preview-code code {
    font-size: v-bind("props.fontSize");
}
</style>
