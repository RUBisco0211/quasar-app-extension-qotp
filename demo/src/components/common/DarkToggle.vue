<template>
    <q-toggle
        :model-value="$q.dark.isActive"
        @update:model-value="(value, event) => handleToggle(event)"
        :color="$q.dark.isActive ? 'primary' : 'secondary'"
        keep-color
    >
    </q-toggle>
</template>
<script setup lang="ts">
import { useQuasar } from "quasar";
import useDark from "src/stores/dark";
const $q = useQuasar();
const { handleToggle } = useDark();
withDefaults(
    defineProps<{
        color?: string;
    }>(),
    {
        color: "primary",
    }
);
</script>
