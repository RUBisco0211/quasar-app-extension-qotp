<template>
    <q-otp-input v-bind="otpProps" v-model="otp"></q-otp-input>
    <q-separator class="q-my-md"></q-separator>
    <div class="row q-col-gutter-md">
        <div class="col-6">
            <q-input
                readonly
                v-model="otp"
                outlined
                :label="$t('example.content.inputLabel')"
            ></q-input>
        </div>
        <div class="col-6 q-pl-lg">
            <div class="text-h6 text-weight-regular">
                {{ $t("example.content.subtitle1") }}
            </div>
            <q-toggle
                v-model="otpProps.allowPaste"
                icon="check"
                unchecked-icon="clear"
                :label="$t('example.content.allowPaste')"
            ></q-toggle>
            <br />
            <q-toggle
                v-model="otpProps.digitOnly"
                icon="check"
                unchecked-icon="clear"
                :label="$t('example.content.digitOnly')"
            ></q-toggle>
            <br />
            <q-toggle
                v-model="otpProps.realTime"
                icon="check"
                unchecked-icon="clear"
                :label="$t('example.content.realTime')"
            ></q-toggle>
            <br />
            <div class="q-my-md"></div>
            <div class="text-h6 text-weight-regular">
                {{ $t("example.content.subtitle2") }}
            </div>
            <q-select
                class="q-mt-sm"
                outlined
                v-model="otpProps.colGutter"
                :options="gutterOptions"
                map-options
                emit-value
                options-dense
                :label="$t('example.content.colGutter')"
            >
            </q-select>
            <q-select
                class="q-mt-sm"
                outlined
                v-model="inputStyle"
                :options="styleOptions"
                map-options
                emit-value
                options-dense
                :label="$t('example.content.inputStyle')"
            ></q-select>
            <q-toggle
                class="q-mt-sm"
                v-model="otpProps.dense"
                icon="check"
                unchecked-icon="clear"
                :label="$t('example.content.dense')"
            ></q-toggle>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const otp = ref("");

const otpProps = ref<Record<string, any>>({
    length: 6,
    colGutter: "md",
    allowPaste: true,
    digitOnly: true,
    realTime: true,
    outlined: true,
    filled: false,
    standout: false,
    dense: false,
});

const gutterOptions = [
    {
        label: "none",
        value: "none",
    },
    {
        label: "xs",
        value: "xs",
    },
    {
        label: "sm",
        value: "sm",
    },
    {
        label: "md",
        value: "md",
    },
    {
        label: "lg",
        value: "lg",
    },
    {
        label: "xl",
        value: "xl",
    },
];

const inputStyle = ref("outlined");
const styleOptions = [
    {
        label: "outlined",
        value: "outlined",
    },
    {
        label: "filled",
        value: "filled",
    },
    {
        label: "standout",
        value: "standout",
    },
    {
        label: "none",
        value: "none",
    },
];

watch(inputStyle, (s) => {
    if (s === "none") {
        styleOptions.forEach((o) => {
            otpProps.value[o.value] = false;
        });
        return;
    }
    styleOptions.forEach((o) => {
        if (o.value === s) {
            otpProps.value[s] = true;
        } else {
            otpProps.value[o.value] = false;
        }
    });
});
</script>
