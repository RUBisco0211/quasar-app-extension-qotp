<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input v-bind="props" v-model="otp" class="q-mb-md">
            </q-otp-input>
            <q-input
                readonly
                v-model="otp"
                outlined
                :label="$t('examples.global.inputLabel')"
                class="q-mb-md"
            ></q-input>

            <template v-for="(_, key) in props" :key="key">
                <q-toggle
                    :label="$t(`examples.behavior.${key}`)"
                    v-model="props[key]"
                ></q-toggle>
                <br />
            </template>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { QInput } from "quasar";
import { QOtpInputProps } from "@rubisco0211/quasar-app-extension-qotp";

const otp = ref("");

const props = ref({
    autofocus: true,
    digitOnly: true,
    allowPaste: true,
    realTime: true,
});
</script>
