declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: string;
        VUE_ROUTER_MODE: "hash" | "history" | "abstract" | undefined;
        VUE_ROUTER_BASE: string | undefined;
    }
}

// .md文件可作为模块导入
declare module "*.md" {
    const content: string;
    export default content;
}
