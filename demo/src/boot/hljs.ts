import { boot } from "quasar/wrappers";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/vbscript-html";
import typescript from "highlight.js/lib/languages/typescript";

const langs = {
    javascript,
    html,
    typescript,
};

const aliases: Record<string, string[]> = {
    javascript: ["js"],
    typescript: ["ts"],
};

export default boot(({ app }) => {
    Object.entries(langs).forEach(([name, lang]) => {
        hljs.registerLanguage(name, lang);
    });
    Object.entries(aliases).forEach(([name, aliases]) => {
        aliases.forEach((alias) => {
            hljs.registerAliases(alias, { languageName: name });
        });
    });
    app.use(hljs.vuePlugin);
});
