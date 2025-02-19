<template>
    <q-layout view="lHh Lpr lFf">
        <q-header
            class="bg-transparent"
            :class="$q.dark.isActive ? 'text-white' : 'text-dark'"
        >
            <q-toolbar class="q-my-sm">
                <q-toolbar-title class="text-h6">
                    Quasar OTP Input Demo
                </q-toolbar-title>
                <q-space></q-space>
                <q-select
                    :label="$t('language')"
                    dense
                    outlined
                    v-model="$i18n.locale"
                    :options="localeOptions"
                    map-options
                    emit-value
                    options-dense
                ></q-select>
                <dark-toggle class="q-mx-sm"></dark-toggle>
                <q-separator vertical></q-separator>
                <q-btn
                    icon="mdi-github"
                    flat
                    round
                    class="q-ml-sm"
                    size="md"
                    :href="githubUrl"
                    target="_blank"
                ></q-btn>
                <q-btn
                    icon="mdi-npm"
                    flat
                    round
                    class="q-mr-sm"
                    size="md"
                    :href="npmUrl"
                    target="_blank"
                    color="red"
                ></q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script setup lang="ts">
import DarkToggle from "src/components/common/DarkToggle.vue";

const localeOptions = [
    {
        label: "English",
        value: "en",
    },
    {
        label: "简体中文",
        value: "zh",
    },
];

const githubUrl = "https://github.com/RUBisco0211/quasar-app-extension-qotp";
const npmUrl =
    "https://www.npmjs.com/package/@rubisco0211/quasar-app-extension-qotp";
</script>
