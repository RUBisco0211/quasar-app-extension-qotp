<template>
    <q-page padding>
        <div class="row justify-center">
            <div class="col-lg-4 col-12">
                <q-card flat bordered>
                    <q-card-section class="text-h6">
                        {{ $t("example.header") }}
                    </q-card-section>

                    <q-separator></q-separator>
                    <q-card-section>
                        <basic-usage></basic-usage>
                    </q-card-section>
                    <q-separator></q-separator>
                    <q-expansion-item>
                        <template #header>
                            <q-item-section>
                                <q-item-label>{{
                                    $t("example.expansion")
                                }}</q-item-label>
                            </q-item-section>
                        </template>
                        <q-tabs
                            align="center"
                            v-model="tab"
                            active-color="primary"
                        >
                            <q-tab
                                label="Template"
                                name="template"
                                no-caps
                            ></q-tab>
                            <q-tab
                                label="Script setup"
                                name="script"
                                no-caps
                            ></q-tab>
                        </q-tabs>
                        <q-tab-panels v-model="tab" animated>
                            <q-tab-panel
                                class="q-pa-md overflow-auto"
                                name="template"
                                v-hljs="{ lang: 'html' }"
                                style="height: 500px"
                            >
                                <pre>
                                    <code>{{ template }}</code>
                                </pre>
                            </q-tab-panel>
                            <q-tab-panel
                                class="q-pa-md overflow-auto"
                                name="script"
                                v-hljs="{ lang: 'ts' }"
                                style="height: 500px"
                            >
                                <pre>
                                    <code>{{ script }}</code>
                                </pre>
                            </q-tab-panel>
                        </q-tab-panels>
                    </q-expansion-item>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import BasicUsage from "src/examples/BasicUsage.vue";
import { ref } from "vue";
import { template, script } from "src/examples/BasicUsage.src";

const tab = ref("template");
</script>
