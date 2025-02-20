<template>
    <div @mouseenter="handleEnter" @mouseleave="handleLeave">
        <slot :hover="isHovering"></slot>
    </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, VNode } from "vue";
defineSlots<{
    default: (props: { hover: boolean }) => VNode[];
}>();

const props = withDefaults(
    defineProps<{
        enterDelay?: number;
        leaveDelay?: number;
    }>(),
    {
        enterDelay: 0,
        leaveDelay: 300,
    }
);
let timeout: number;
const handleEnter = () => {
    const { enterDelay } = props;
    timeout = window.setTimeout(() => {
        isHovering.value = true;
    }, enterDelay);
};
const handleLeave = () => {
    const { leaveDelay } = props;
    timeout = window.setTimeout(() => {
        isHovering.value = false;
    }, leaveDelay);
};

const isHovering = ref(false);

onUnmounted(() => {
    window.clearTimeout(timeout);
});
</script>
