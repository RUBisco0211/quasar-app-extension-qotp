<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input placeholder="*" :length v-model="otp" class="q-mb-md">
            </q-otp-input>
            <q-input
                readonly
                v-model="otp"
                outlined
                :label="$t('examples.global.inputLabel')"
                class="q-mb-md"
            ></q-input>
            <label for="length">{{ $t("examples.basic.length") }}</label>
            <q-slider
                v-model="length"
                :min="4"
                :max="10"
                snap
                label
                markers
                label-always
            ></q-slider>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { QInput } from "quasar";

const otp = ref("");
const length = ref(6);
</script>
