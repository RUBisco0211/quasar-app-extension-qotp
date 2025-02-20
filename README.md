# Quasar App Extension q-otp-input

[中文文档](./README-zh-CN.md)

The QOtpInput component is used for inputting one-time password.

# Links

[npm: @rubisco0211/quasar-app-extension-qotp](https://www.npmjs.com/package/@rubisco0211/quasar-app-extension-qotp)

[demo](https://rubisco0211.github.io/quasar-app-extension-qotp/#/)

# Install

```bash
quasar ext add @rubisco0211/qotp
```

Quasar CLI will retrieve it from the NPM registry and install the extension to your project.

# Uninstall

```bash
quasar ext remove @rubisco0211/qotp
```

# Usage

```vue
<template>
    <q-otp-input v-bind="otpProps" v-model="otp"></q-otp-input>
</template>
<script setup lang="ts">
import { ref } from "vue";

const otp = ref("");

const otpProps = ref({
    length: 6,
    placeholder: "",

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
</script>
```

# Donate

If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
