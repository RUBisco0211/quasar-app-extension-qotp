<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input ref="otpRef" v-model="otp" class="q-mb-md">
            </q-otp-input>
            <q-input
                readonly
                v-model="otp"
                outlined
                :label="$t('examples.global.inputLabel')"
                class="q-mb-md"
            ></q-input>
            <div v-if="otpRef" class="row q-gutter-md">
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.focus')"
                    @click="otpRef.focus"
                    icon="mdi-selection-ellipse-arrow-inside"
                ></q-btn>
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.blur')"
                    @click="otpRef.blur"
                    icon="mdi-selection-ellipse-remove"
                ></q-btn>
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.clear')"
                    @click="otpRef.clear"
                    icon="mdi-close"
                ></q-btn>
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.backspace')"
                    @click="otpRef.backspace"
                    icon="mdi-backspace-outline"
                ></q-btn>
            </div>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { QInput } from "quasar";
import { type QOtpInput } from "@rubisco0211/quasar-app-extension-qotp";

const otp = ref("");

const otpRef = ref<QOtpInput | null>(null);
onMounted(() => {
    console.log("otp", otpRef.value);
});
</script>
