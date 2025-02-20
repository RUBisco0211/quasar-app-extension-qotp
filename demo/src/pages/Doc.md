```vue preview [basic]
<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input placeholder="*" :length v-model="otp" class="q-mb-md">
            </q-otp-input>
            <label for="length">{{ $t("examples.basic.length") }}</label>
            <q-slider
                v-model="length"
                :min="4"
                :max="10"
                snap
                label
                markers
                label-always></q-slider>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { QInput } from "quasar";

const otp = ref("");
const length = ref(6);
</script>
```

```vue preview [behavior]
<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input v-bind="props" v-model="otp" class="q-mb-md">
            </q-otp-input>
            <q-input
                readonly
                v-model="otp"
                outlined
                :label="$t('examples.global.inputLabel')"
                class="q-mb-md"></q-input>

            <template v-for="(_, key) in props" :key="key">
                <q-toggle
                    :label="$t(`examples.behavior.${key}`)"
                    v-model="props[key]"></q-toggle>
                <br />
            </template>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { QInput } from "quasar";
import { QOtpInputProps } from "@rubisco0211/quasar-app-extension-qotp";

const otp = ref("");

const props = ref({
    autofocus: true,
    digitOnly: true,
    allowPaste: true,
    realTime: true,
});
</script>
```

```vue preview [state]
<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input v-bind="props" :type v-model="otp" class="q-mb-md">
                <template #loading="{ loading }">
                    <q-inner-loading :showing="loading"> </q-inner-loading>
                </template>
            </q-otp-input>
            <q-option-group
                v-model="type"
                :options="
                    typeOptions.map((t) => ({ label: t, value: t }))
                "></q-option-group>
            <br />

            <template v-for="(_, key) in props" :key="key">
                <q-toggle
                    :label="$t(`examples.state.${key}`)"
                    v-model="props[key]"></q-toggle>
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
```

```vue preview [style]
<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input v-bind="props" v-model="otp" class="q-mb-md">
                <template #loading="{ loading }">
                    <q-inner-loading :showing="loading"> </q-inner-loading>
                </template>
            </q-otp-input>
            <label for="style">{{ $t("examples.style.inputStyle") }}</label>
            <q-option-group
                inline
                v-model="style"
                :options="
                    styles.map((t) => ({ label: t, value: t }))
                "></q-option-group>
            <q-toggle
                :label="$t(`examples.style.dense`)"
                v-model="props.dense"></q-toggle>
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
```

```vue preview [slots]
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
            <q-otp-input v-model="otp" class="q-mb-md">
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
                        size="sm"></q-icon>
                </template>
                <template #after="{ clear, backspace, blur, focus }">
                    <q-btn
                        flat
                        round
                        icon="mdi-backspace-outline"
                        color="negative"
                        @click="backspace"></q-btn>
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
```

```vue preview [expose]
<template>
    <div class="row">
        <q-space />
        <div style="width: 500px">
            <q-otp-input ref="otpRef" v-model="otp" gutter="md" class="q-mb-md">
            </q-otp-input>
            <q-input
                readonly
                v-model="otp"
                outlined
                :label="$t('examples.global.inputLabel')"
                class="q-mb-md"></q-input>
            <div v-if="otpRef" class="row q-gutter-md">
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.focus')"
                    @click="otpRef.focus"
                    icon="mdi-selection-ellipse-arrow-inside"></q-btn>
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.blur')"
                    @click="otpRef.blur"
                    icon="mdi-selection-ellipse-remove"></q-btn>
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.clear')"
                    @click="otpRef.clear"
                    icon="mdi-close"></q-btn>
                <q-btn
                    no-caps
                    unelevated
                    color="primary"
                    :label="$t('examples.expose.backspace')"
                    @click="otpRef.backspace"
                    icon="mdi-backspace-outline"></q-btn>
            </div>
        </div>
        <q-space />
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { QInput } from "quasar";
import { type QOtpInput } from "@rubisco0211/quasar-app-extension-qotp";

const otp = ref("");

const otpRef = ref<QOtpInput | null>(null);
</script>
```
