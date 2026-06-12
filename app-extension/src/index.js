function extendConf(conf, api) {
    // register our boot file
    conf.boot ??= [];
    conf.boot.push(
        "~@rubisco0211/quasar-app-extension-qotp/src/boot/register.js",
    );

    // make sure app extension files & ui package gets transpiled

    if (
        api.hasPackage("@quasar/app-webpack") &&
        Array.isArray(conf.build?.transpileDependencies)
    ) {
        conf.build.transpileDependencies.push(
            /@rubisco0211\/quasar-app-extension-qotp[\\/]src/,
        );
    }

    // if (
    //     api.hasVite !== true &&
    //     Array.isArray(conf.build.transpileDependencies)
    // ) {
    //     conf.build.transpileDependencies.push(
    //         /@rubisco0211\/quasar-app-extension-qotp[\\/]src/,
    //     );
    // }
    // make sure the stylesheet goes through webpack to avoid SSR issues
    // conf.css.push("~quasar-ui-qotp/src/index.sass");
}

export default function (api) {
    // Quasar compatibility check; you may need
    // hard dependencies, as in a minimum version of the "quasar"
    // package or a minimum version of "@quasar/app-*" CLI
    api.compatibleWith("vue", "^3.*");
    api.compatibleWith("quasar", "^2.*");

    if (api.hasPackage("@quasar/app-vite")) {
        api.compatibleWith(
            "@quasar/app-vite",
            ">=2.0.0 <3.0.0 || >=3.0.0-0 <4.0.0",
        );
    } else {
        api.compatibleWith("@quasar/app-webpack", "^3.4.0");
    }

    // Uncomment the line below if you provide a JSON API for your component
    // api.registerDescribeApi('QOtpInput', '~quasar-ui-qotpinput/src/components/QOtpInput.json')

    // We extend /quasar.conf.js
    api.extendQuasarConf(extendConf);
}
