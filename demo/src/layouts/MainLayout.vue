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
                <q-separator vertical inset></q-separator>
                <q-icon
                    name="mdi-github"
                    flat
                    dense
                    round
                    class="q-ml-sm"
                    size="md"
                    @click="openURL(githubUrl)"
                ></q-icon>
                <q-icon
                    name="mdi-npm"
                    flat
                    dense
                    round
                    class="q-mx-sm"
                    size="md"
                    color="red"
                    @click="openURL(npmUrl)"
                ></q-icon>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script setup lang="ts">
import DarkToggle from "src/components/common/DarkToggle.vue";
import { openURL } from "quasar";

const localeOptions = [
    {
        label: "English",
        value: "en-US",
    },
    {
        label: "简体中文",
        value: "zh-CN",
    },
];

const githubUrl = "https://github.com/RUBisco0211/quasar-app-extension-qotp";
const npmUrl =
    "https://www.npmjs.com/package/@rubisco0211/quasar-app-extension-qotp";
</script>
