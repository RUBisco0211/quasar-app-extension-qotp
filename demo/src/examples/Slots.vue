<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <label for="separator">separator</label>
            <q-otp-input v-model="otp" class="q-mb-md" :error>
                <template #separator="{ slotClass }">
                    <div :class="slotClass" class="text-h6">-</div>
                </template>
                <template #after>
                    <q-toggle label="error" v-model="error"></q-toggle>
                </template>
            </q-otp-input>
            <q-otp-input v-model="otp" class="q-mb-md" :error>
                <template #separator="{ slotClass }">
                    <div :class="slotClass" class="text-h6">😭</div>
                </template>
            </q-otp-input>

            <label for="loading">loading</label>
            <br />
            <span class="text-weight-bold"> Recommend: QInnerLoading </span>
            <q-otp-input v-model="otp" class="q-mb-md" loading>
                <template #loading="{ loading }">
                    <q-inner-loading :showing="loading"> </q-inner-loading>
                </template>
            </q-otp-input>

            <label for="before and after">before and after</label>
            <br />
            <span class="text-weight-bold"> Recommend: QIcon / QBtn </span>
            <q-otp-input v-model="otp" class="q-mb-md">
                <template #before="{ clear, backspace, blur, focus }">
                    <q-icon
                        name="mdi-dialpad"
                        color="primary"
                        size="sm"
                    ></q-icon>
                </template>
                <template #after="{ clear, backspace, blur, focus }">
                    <q-btn
                        flat
                        round
                        icon="mdi-backspace-outline"
                        color="negative"
                        @click="backspace"
                    ></q-btn>
                </template>
            </q-otp-input>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const otp = ref("");
const error = ref(false);
</script>
