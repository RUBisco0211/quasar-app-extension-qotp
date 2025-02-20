import { defineBoot } from "#q-app/wrappers";
import { Directive } from "vue";
import { codeToHtml } from "shiki";
import { copyToClipboard, Dark } from "quasar";

const directives: Record<string, Directive> = {
    highlight: async (
        el: HTMLElement,
        binding: { value: { lang: string; code: string } }
    ) => {
        const {
            value: { lang, code },
        } = binding;
        el.classList.add("q-pa-md");
        const html = await codeToHtml(code, {
            lang,
            theme: Dark.isActive ? "github-dark" : "github-light",
        });
        el.innerHTML = html;
    },
    clickCopy: (
        el: HTMLElement,
        binding: {
            value: {
                content: string;
                onSuccess?: () => void;
                onError?: () => void;
            };
        }
    ) => {
        const { content, onSuccess, onError } = binding.value;
        el.onclick = async () => {
            copyToClipboard(content).then(onSuccess).catch(onError);
        };
    },
};

export default defineBoot(({ app }) => {
    Object.entries(directives).forEach(([name, directive]) => {
        app.directive(name, directive);
    });
});
