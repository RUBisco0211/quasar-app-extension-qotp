import { defineComponent, h, ref, watch, withModifiers, onMounted } from "vue";
import { QInput } from "quasar";
import {
    isDigit,
    isDigitOrAlpha,
    hasOnlyDigit,
    hasOnlyDigitOrAlpha,
} from "../utils/validate";

export default defineComponent({
    name: "QOtpInput",
    props: {
        length: {
            type: Number,
            default: 6,
            require: false,
        },
        modelValue: {
            type: String,
            default: "",
            require: true,
        },
        digitOnly: {
            type: Boolean,
            default: true,
            require: false,
        },
        allowPaste: {
            type: Boolean,
            default: true,
            require: false,
        },
        realTime: {
            type: Boolean,
            default: true,
            require: false,
        },
        outlined: {
            type: Boolean,
            default: false,
            require: false,
        },
        filled: {
            type: Boolean,
            default: false,
            require: false,
        },
        dense: {
            type: Boolean,
            default: false,
            require: false,
        },
    },
    emits: ["update:model-value"],
    setup(props, { emit }) {
        const inputChars = ref(
            Array.from(props.modelValue.substring(0, props.length))
        );

        const inputRefs = ref([]);

        const focusInput = (index) => {
            if (index >= 0 && index < props.length) {
                inputRefs.value[index].focus();
            } else if (index === props.length) {
                inputRefs.value[props.length - 1].blur();
            } else {
                inputRefs.value[0].focus();
            }
        };

        const handleKeydown = (e, index) => {
            const { key } = e;
            const currentLength = inputChars.value.length;

            const isValid = props.digitOnly ? isDigit : isDigitOrAlpha;
            if (isValid(key)) {
                if (index >= currentLength) {
                    if (currentLength <= props.length) {
                        inputChars.value.push(key);
                    }
                    focusInput(inputChars.value.length);
                } else {
                    inputChars.value[index] = key;
                    focusInput(index + 1);
                }
            }
            if (e.key === "Backspace") {
                if (index === currentLength) {
                    inputChars.value.pop();
                    focusInput(inputChars.value.length);
                } else {
                    inputChars.value.splice(index, 1);
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

        const emitOtp = () => {
            const otp = inputChars.value.join("");

            if (props.realTime || props.value.length === props.length) {
                console.log(otp);
                emit("update:model-value", otp);
            }
        };

        const handlePaste = () => {
            if (!props.allowPaste) return;
            let data = "";
            navigator.clipboard
                .readText()
                .then((text) => {
                    data = text;
                })
                .finally(() => {
                    const isValidStr = props.digitOnly
                        ? hasOnlyDigit
                        : hasOnlyDigitOrAlpha;
                    if (isValidStr(data)) {
                        inputChars.value = data
                            .split("")
                            .slice(0, props.length);
                        focusInput(inputChars.value.length);
                    }
                });
        };

        watch(
            () => inputChars.value.join(""),
            () => emitOtp()
        );

        const renderInputs = () => {
            const inputComponents = [];
            const { outlined, filled, dense } = props;
            for (let i = 1; i <= props.length; i++) {
                inputComponents.push(
                    h(QInput, {
                        ref: (el) => (inputRefs.value[i - 1] = el),
                        class: {
                            col: true,
                            "q-otp-input-item": true,
                        },
                        key: i,
                        autofocus: i === 1,
                        modelValue: inputChars.value[i - 1],
                        type: "text",
                        maxlength: 1,
                        outlined,
                        filled,
                        dense,
                        onKeydown: withModifiers(
                            (e) => {
                                handleKeydown(e, i - 1);
                            },
                            ["prevent"]
                        ),
                        onPaste: withModifiers(handlePaste, ["prevent"]),
                    })
                );
            }
            return h(
                "div",
                {
                    class: { row: true, "q-gutter-md": true },
                },
                inputComponents
            );
        };

        return () => renderInputs();
    },
});
