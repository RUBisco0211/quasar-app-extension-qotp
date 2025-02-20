<template>
    <q-card bordered class="q-my-xl">
        <q-expansion-item hide-expand-icon expand-icon-toggle>
            <template #header="{ toggle, expanded }">
                <q-item-section>
                    <q-item-label>
                        {{ $t(`examples.${name}.title`) }}
                    </q-item-label>
                </q-item-section>
                <q-space></q-space>
                <q-btn
                    flat
                    round
                    v-if="expanded"
                    icon="mdi-content-copy"
                    v-click-copy="{
                        content: code,
                        onSuccess: () => {
                            $q.notify({
                                type: 'positive',
                                message: 'Copied!',
                            });
                        },
                    }"
                    color="primary"
                ></q-btn>
                <q-btn
                    flat
                    round
                    icon="mdi-reload"
                    color="primary"
                    @click="reload"
                ></q-btn>
                <q-btn
                    flat
                    round
                    icon="mdi-code-tags"
                    @click="toggle"
                    color="primary"
                ></q-btn>
            </template>
            <example-code :lang :code></example-code>
        </q-expansion-item>
        <q-separator></q-separator>
        <q-card-section>
            <slot v-if="!reloading"></slot>
            <q-inner-loading :showing="reloading"></q-inner-loading>
        </q-card-section>
    </q-card>
</template>
<script setup lang="ts">
import { ref, VNode, computed } from "vue";
import ExampleCode from "./ExampleCode.vue";

const props = defineProps<{
    lang: string;
    meta: string;
    code: string;
}>();

const name = computed(() =>
    props.meta.replace("preview", "").replace("[", "").replace("]", "").trim()
);

const reloading = ref(false);

const reload = () => {
    reloading.value = true;
    setTimeout(() => {
        reloading.value = false;
    }, 300);
};

defineSlots<{
    default?: () => VNode[];
    code?: () => VNode[];
}>();
</script>
