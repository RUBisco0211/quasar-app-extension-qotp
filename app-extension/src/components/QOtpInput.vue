<template>
    <q-card-section
        class="row q-my-none q-pa-none items-center q-col-gutter-sm">
        <div v-if="$slots.before">
            <slot
                name="before"
                :blur="blur"
                :focus="focus"
                :clear="clear"
                :backspace="backspace"></slot>
        </div>

        <template v-for="i in length" :key="i">
            <q-input
                :placeholder
                :type
                :error
                :outlined
                :filled
                :standout
                :dense
                class="col otp-input-item"
                ref="inputRefs"
                :loading="false"
                :disable="disable || loading"
                :readonly="readonly || loading"
                no-error-icon
                hide-bottom-space
                :model-value="inputValues[i - 1]"
                :autofocus="autofocus && i === 1"
                :maxlength="1"
                @update:model-value="(v) => handleUpdate(v, i - 1)"
                @keydown="handleKeyDown($event, i - 1)"
                @focus="handleFocus(i - 1)"
                @paste.prevent="handlePaste"></q-input>
            <slot
                name="separator"
                v-if="i !== length"
                :slot-class="error ? 'text-negative' : ''">
            </slot>
        </template>
        <div v-if="$slots.after">
            <slot
                name="after"
                :blur="blur"
                :focus="focus"
                :clear="clear"
                :backspace="backspace"></slot>
        </div>

        <slot name="loading" v-if="$slots.loading" :loading="loading"></slot>
    </q-card-section>
</template>
<script setup lang="ts">
import { QInput } from "quasar";
import { defineComponent, ref, watch } from "vue";
import type { QOtpInputProps, QOtpInputSlots } from "./index";

defineComponent({
    name: "QOtpInput",
});

const props = withDefaults(defineProps<QOtpInputProps>(), {
    length: 6,
    placeholder: "",
    modelValue: "",

    autofocus: true,
    digitOnly: true,
    allowPaste: true,
    realTime: true,

    type: "text",
    readonly: false,
    disable: false,
    loading: false,
    error: false,

    outlined: true,
    filled: false,
    dense: false,
    standout: false,
    fontSize: "18px",
});

const emit = defineEmits<{
    (e: "update:model-value", value: string): void;
}>();

const blur = () => {
    inputRefs.value.forEach((i) => i.blur());
};
const focus = () => {
    if (props.length >= 1) inputRefs.value[0].focus();
};
const clear = () => {
    inputValues.value.splice(0, inputValues.value.length);
};
const backspace = () => {
    inputValues.value.pop();
};

const slots = defineSlots<QOtpInputSlots>();

const inputValues = ref<string[]>(
    Array.from(props.modelValue.substring(0, props.length))
);

watch(
    () => props.modelValue,
    () => {
        if (props.realTime) {
            inputValues.value = Array.from(
                props.modelValue.substring(0, props.length)
            );
        }
    }
);

// 用于获取组件ref以及切换焦点
const inputRefs = ref<QInput[]>([]);

// 聚焦某个输入框时全选其内容以便直接更改
const handleFocus = (index: number) => {
    inputRefs.value[index].select();
};

// 自动聚焦于某个输入框
const focusInput = (index: number) => {
    if (index >= 0 && index < props.length) {
        inputRefs.value[index].focus();
    } else if (index === props.length) {
        inputRefs.value[props.length - 1].blur();
    } else {
        inputRefs.value[0].focus();
    }
};

const isDigit = (ch: string) => /^\d$/.test(ch);
const isDigitOrLetter = (ch: string) => /^[A-Za-z0-9]$/.test(ch);

const hasOnlyDigit = (ch: string) => /^\d+$/.test(ch);
const hasOnlyDigitOrLetter = (ch: string) => /^[A-Za-z0-9]+$/.test(ch);

const handleUpdate = (v: string | number | null, index: number) => {
    const value = v?.toString();
    if (!value) {
        inputValues.value.splice(index, 1);
        focusInput(index - 1);
        return;
    }
    const isValid = props.digitOnly ? isDigit : isDigitOrLetter;
    if (isValid(value)) {
        const currentLength = inputValues.value.length;
        // 当前输入框的位置大于等于当前otp长度，则插入当前输入的字符，并移动光标到修改位置的后一位
        if (index >= currentLength) {
            if (currentLength <= props.length) {
                inputValues.value.push(value);
            }
            focusInput(inputValues.value.length);
        } else {
            // 当前输入框的位置小于当前otp长度，则替换当前输入的字符，并移动光标到修改位置的后一位
            inputValues.value[index] = value;
            focusInput(index + 1);
        }
    }
};

const handleKeyDown = async (e: KeyboardEvent, index: number) => {
    const { key } = e;
    // 回车的情况，直接从后删除
    if (e.key === "Backspace") {
        inputValues.value.pop();
        focusInput(inputValues.value.length);
        return;
    }
    if (e.key === "ArrowLeft") {
        e.preventDefault();
        focusInput(index - 1);
        return;
    }
    if (e.key === "ArrowRight") {
        e.preventDefault();
        focusInput(index + 1);
        return;
    }
    if (e.ctrlKey && (key === "v" || key === "V")) {
        e.preventDefault();
        await handlePaste();
        return;
    }
};

watch(
    () => inputValues.value.join(""),
    () => emitOtp()
);

const emitOtp = () => {
    const otp = inputValues.value.join("");
    // 如果要实时更新
    if (props.realTime || inputValues.value.length === props.length) {
        emit("update:model-value", otp);
    }
};

const handlePaste = async () => {
    if (props.allowPaste) {
        const data = await navigator.clipboard.readText();
        const isValidStr = props.digitOnly
            ? hasOnlyDigit
            : hasOnlyDigitOrLetter;
        if (isValidStr(data)) {
            inputValues.value = data.split("").slice(0, props.length);
            focusInput(inputValues.value.length);
        }
    }
};

defineExpose({
    blur,
    focus,
    clear,
    backspace,
});
</script>
<style lang="scss" scoped>
.otp-input-item {
    :deep(input) {
        text-align: center !important;
        font-size: v-bind("props.fontSize") !important;
        ::selection {
            border-radius: 10px !important;
        }
        ::placeholder {
            font-size: v-bind("props.fontSize") !important;
        }
        // caret-color: transparent !important;
    }
}
</style>
