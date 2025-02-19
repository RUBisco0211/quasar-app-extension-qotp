# Quasar App Extension q-otp-input

为使用 quasar-cli 的 vue 项目添加了组件 q-otp-input，用于实现对 one-time password (OTP) 验证码的输入。

# 链接

[npm: @rubisco0211/quasar-app-extension-qotp](https://www.npmjs.com/package/@rubisco0211/quasar-app-extension-qotp)

[demo](https://rubisco0211.github.io/quasar-app-extension-qotp/#/)

# 安装

```bash
quasar ext add @rubisco0211/qotp
```

# 卸载

```bash
quasar ext remove @rubisco0211/qotp
```

# 使用例

```html
<template>
    <q-otp-input v-bind="otpProps" v-model="otp"></q-otp-input>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    const otp = ref("");

    const otpProps = ref<Record<string, any>>({
        length: 6,
        colGutter: "md", // 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
        allowPaste: true,
        digitOnly: true,
        realTime: true,
        outlined: true,
        filled: false,
        standout: false,
        dense: false,
    });
</script>
```
