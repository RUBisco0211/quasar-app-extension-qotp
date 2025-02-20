import type { QInputProps, GlobalComponentConstructor } from "quasar";
import { ComponentPublicInstance, VNode } from "vue";

export interface QOtpInputProps {
    // basic

    /**
     * length of one-time passcode
     * @default 6
     */
    length?: number;
    placeholder?: string;
    modelValue?: string;

    // behavior

    /**
     * whether to autofocus on first input field
     * @default true
     */
    autofocus?: boolean;
    /**
     * allow only digits in OTP or allow digits and letters
     * @default true
     */
    digitOnly?: boolean;
    /**
     * allow pasting in the input-fields
     * @default true
     */
    allowPaste?: boolean;
    /**
     * emit the OTP on change or til it's completed
     * @default true
     */
    realTime?: boolean;

    // state

    /**
     * type of the input fields
     * @default "text"
     */
    type?: "text" | "password";
    readonly?: boolean;
    disable?: boolean;
    loading?: boolean;
    error?: boolean;

    // style

    outlined?: boolean;
    filled?: boolean;
    dense?: boolean;
    standout?: QInputProps["standout"];
    /**
     * font size of the inner text
     * @default "18px"
     */
    fontSize?: string;

    "onUpdate:model-value"?: (value: string) => void;
}

export interface QOtpInputExpose {
    /**
     * lose focus on all input fields
     * @returns
     */
    blur: () => void;
    /**
     * focus on first input field
     * @returns
     */
    focus: () => void;
    /**
     * clear the OTP
     * @returns
     */
    clear: () => void;
    /**
     * remove the last character of the OTP
     * @returns
     */
    backspace: () => void;
}

export interface QOtpInput
    extends ComponentPublicInstance<QOtpInputProps>,
        QOtpInputExpose {}

export interface QOtpInputSlots {
    separator?: (props: { slotClass: string }) => VNode[];
    // suggestions: QInnerLoading
    loading?: (props: { loading: boolean }) => VNode[];
    // suggestions: QBtn
    before?: (scope: QOtpInputExpose) => VNode[];
    // suggestions: QBtn
    after?: (scope: QOtpInputExpose) => VNode[];
}

export const QOtpInput: GlobalComponentConstructor<
    QOtpInputProps,
    QOtpInputSlots
>;
