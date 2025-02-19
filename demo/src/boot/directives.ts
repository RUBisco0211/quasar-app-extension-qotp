import { boot } from "quasar/wrappers";
import { Directive } from "vue";

import hljs from "highlight.js";

const directives: Record<string, Directive> = {
    hljs: (el: HTMLElement, binding: { value: { lang: string } }) => {
        const {
            value: { lang },
        } = binding;
        const blocks = el.querySelectorAll("pre code");
        blocks.forEach((block) => {
            block.classList.add(lang);
            hljs.highlightBlock(block as HTMLElement);
        });
    },
};

export default boot(({ app }) => {
    Object.entries(directives).forEach(([name, directive]) => {
        app.directive(name, directive);
    });
});
