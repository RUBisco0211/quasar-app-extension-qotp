<template>
    <q-page padding>
        <div class="row justify-center">
            <div class="col-lg-6 col-12">
                <Doc></Doc>
            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import Basic from "src/examples/Basic.vue";
import Doc from "./Doc.md";
import { ref } from "vue";
import Behavior from "src/examples/Behavior.vue";
import State from "src/examples/State.vue";
import Style from "src/examples/Style.vue";
import Slots from "src/examples/Slots.vue";
import Expose from "src/examples/Expose.vue";

const tab = ref("template");
</script>
