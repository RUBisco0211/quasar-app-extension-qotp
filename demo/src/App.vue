<template>
    <router-view />
</template>

<script setup lang="ts">
import useDark from "src/stores/dark";
import { onMounted } from "vue";
const { initDarkMode } = useDark();
onMounted(() => {
    initDarkMode(false);
});
</script>
