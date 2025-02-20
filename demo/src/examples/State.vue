<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input v-bind="props" :type v-model="otp" class="q-mb-md">
                <template #loading="{ loading }">
                    <q-inner-loading :showing="loading"> </q-inner-loading>
                </template>
            </q-otp-input>
            <q-input
                readonly
                v-model="otp"
                outlined
                :label="$t('examples.global.inputLabel')"
                class="q-mb-md"
            ></q-input>
            <q-option-group
                v-model="type"
                :options="typeOptions.map((t) => ({ label: t, value: t }))"
            ></q-option-group>
            <br />

            <template v-for="(_, key) in props" :key="key">
                <q-toggle
                    :label="$t(`examples.state.${key}`)"
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

const otp = ref("");
const type = ref("text");
const typeOptions = ["text", "password"];

const props = ref({
    readonly: false,
    disable: false,
    error: false,
    loading: false,
});
</script>
