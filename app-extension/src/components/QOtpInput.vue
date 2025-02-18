<!-- SFC version of QOtpInput.js -->
<template>
    <div class="row q-gutter-md">
        <q-input
            :outlined
            :filled
            :dense
            :standout
            v-for="i in length"
            :key="i"
            ref="inputRefs"
            class="col otp-input-item"
            :autofocus="i === 1"
            type="text"
            :maxlength="1"
            @keydown.prevent="handleKeydown($event, i - 1)"
            @paste.prevent="handlePaste"
            :model-value="inputValues[i - 1]"></q-input>
    </div>
</template>
<script setup lang="ts">
import { QInput, type QInputProps } from "quasar";
import { defineComponent, ref, watch } from "vue";

defineComponent({
    name: "QOtpInput",
});

const props = withDefaults(
    defineProps<{
        length?: number; // otp长度，默认为6
        modelValue?: string;
        digitOnly?: boolean; // 是否只允许输入数字，否则允许输入大小写字母
        allowPaste?: boolean; // 是否允许粘贴
        realTime?: boolean; // 实时更新，否则默认为输入完毕自动更新
        outlined?: boolean;
        filled?: boolean;
        dense?: boolean;
        standout?: QInputProps["standout"];
    }>(),
    {
        length: 6,
        digitOnly: true,
        allowPaste: true,
        modelValue: "",
        realTime: false,
    }
);

const emits = defineEmits(["update:model-value"]);

const inputValues = ref<string[]>(
    Array.from(props.modelValue.substring(0, props.length))
);

// onMounted(() => {
//     console.log(inputRefs.value);
// });

// 用于获取组件ref以及切换焦点
const inputRefs = ref<QInput[]>([]);
// const setRef = (el: Element, index: number) => {
//     inputRefs.value[`inputRef${index}`] = el;
// };
const focusInput = (index: number) => {
    if (index >= 0 && index < props.length) {
        (inputRefs.value[index] as QInput).focus();
    } else if (index === props.length) {
        (inputRefs.value[props.length - 1] as QInput).blur();
    } else {
        (inputRefs.value[0] as QInput).focus();
    }
};

const isDigit = (ch: string) => /^\d$/.test(ch);
const isDigitOrLetter = (ch: string) => /^[A-Za-z0-9]$/.test(ch);

const hasOnlyDigit = (ch: string) => /^\d+$/.test(ch);
const hasOnlyDigitOrLetter = (ch: string) => /^[A-Za-z0-9]+$/.test(ch);

const handleKeydown = async (e: KeyboardEvent, index: number) => {
    const { key } = e;
    // 更改前的长度
    const currentLength = inputValues.value.length;

    // 是合法字符的情况，输入
    const isValid = props.digitOnly ? isDigit : isDigitOrLetter;
    if (isValid(key)) {
        // 当前输入框的位置大于等于当前otp长度，则插入当前输入的字符，并移动光标到修改位置的后一位
        if (index >= currentLength) {
            if (currentLength <= props.length) {
                inputValues.value.push(key);
            }
            focusInput(inputValues.value.length);
        } else {
            // 当前输入框的位置小于当前otp长度，则替换当前输入的字符，并移动光标到修改位置的后一位
            inputValues.value[index] = key;
            focusInput(index + 1);
        }
    }
    // 回车的情况，删除
    if (e.key === "Backspace") {
        if (index === currentLength) {
            inputValues.value.pop();
            focusInput(inputValues.value.length);
        } else {
            inputValues.value.splice(index, 1);
            focusInput(index - 1);
        }
    }
    if (e.key === "ArrowLeft") {
        focusInput(index - 1);
    }
    if (e.key === "ArrowRight") {
        focusInput(index + 1);
    }

    if (e.ctrlKey && (key === "v" || key === "V")) {
        handlePaste();
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
        emits("update:model-value", otp);
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
</script>
<style lang="scss" scoped>
.otp-input-item {
    :deep(input) {
        text-align: center !important;
    }
}
</style>
