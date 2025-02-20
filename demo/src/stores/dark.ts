import { defineStore } from "pinia";
import { Dark } from "quasar";
import { ref, watch } from "vue";
import { usePreferredDark } from "@vueuse/core";

export default defineStore("dark", () => {
    const dark = ref();
    const preferredDark = usePreferredDark();

    watch(preferredDark, (value) => {
        dark.value = value;
    });

    watch(dark, (value) => {
        Dark.set(value);
    });

    const initDarkMode = (value: boolean) => {
        if (dark.value === undefined) {
            dark.value = value;
        }
        document.documentElement.style.colorScheme = dark.value
            ? "dark"
            : "light";
    };

    const toggleDark = () => {
        dark.value = !Dark.isActive;
        document.documentElement.style.colorScheme = dark.value
            ? "dark"
            : "light";
    };

    const handleToggle = (e: any) => {
        if (!document.startViewTransition) {
            toggleDark();
            return;
        }
        const transition = document.startViewTransition(() => {
            toggleDark();
        });

        transition.ready.then(() => {
            const { clientX, clientY } = e;

            const radius = Math.hypot(
                Math.max(clientX, innerWidth - clientX),
                Math.max(clientY, innerHeight - clientY)
            );

            const clipPath = [
                `circle(0% at ${clientX}px ${clientY}px)`,
                `circle(${radius}px at ${clientX}px ${clientY}px)`,
            ];

            document.documentElement.animate(
                {
                    clipPath,
                },
                {
                    duration: 300,
                    easing: "ease-in",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };
    return {
        dark,
        initDarkMode,
        toggleDark,
        handleToggle,
    };
});
