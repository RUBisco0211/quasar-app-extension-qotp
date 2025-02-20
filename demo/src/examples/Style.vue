<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input v-bind="props" v-model="otp" class="q-mb-md">
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
            <label for="style">{{ $t("examples.style.inputStyle") }}</label>
            <q-option-group
                inline
                v-model="style"
                :options="styles.map((t) => ({ label: t, value: t }))"
            ></q-option-group>
            <q-toggle
                :label="$t(`examples.style.dense`)"
                v-model="props.dense"
            ></q-toggle>
            <br />
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const otp = ref("");

const props = ref({
    outlined: true,
    filled: false,
    standout: false,
    dense: false,
});

const styles = ["none", "outlined", "filled", "standout"];

const style = ref("none");

watch(style, (value) => {
    switch (value) {
        case "none":
            props.value.standout = false;
            props.value.filled = false;
            props.value.outlined = false;
            break;
        case "outlined":
            props.value.standout = false;
            props.value.filled = false;
            props.value.outlined = true;
            break;
        case "filled":
            props.value.standout = false;
            props.value.outlined = false;
            props.value.filled = true;
            break;
        case "standout":
            props.value.outlined = false;
            props.value.filled = false;
            props.value.standout = true;
            break;
    }
});
</script>
