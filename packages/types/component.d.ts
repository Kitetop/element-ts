import Vue from 'vue'
import { ComponentOptions, VueConstructor } from 'vue/types/umd';

export interface TsComponentOptions extends ComponentOptions<Vue> {
    componentName: string;
    [prop : string]: any;
}

export interface TsVueConstructor extends VueConstructor<Vue> {
    componentName: string;
    install: (vue: typeof Vue) => void;
}
export declare class ElementUIComponent extends Vue {

    static install(vue: typeof Vue): void;

    static componentName: string;

    protected getKeyValue<U extends keyof T, T extends object>(key: U): T[U];

    /** 渲染函数，创建元素 */
    render(h: Function): any;
}
