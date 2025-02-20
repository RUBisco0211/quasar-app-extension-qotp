import { defineBoot } from "#q-app/wrappers";
import ExamplePreview from "src/components/ExamplePreview.vue";

export default defineBoot(({ app }) => {
    app.component("CodePreview", ExamplePreview);
});
