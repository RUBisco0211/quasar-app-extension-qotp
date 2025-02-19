import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import enUS from "src/i18n/en-US";
import zhCN from "src/i18n/zh-CN";

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "zh",
    messages: {
        en: enUS,
        zh: zhCN,
    },
});

export default boot(({ app }) => {
    app.use(i18n);
});
