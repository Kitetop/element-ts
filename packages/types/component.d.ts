import Vue from 'vue'
import { ComponentOptions } from 'vue/types/umd';

export interface TsComponentOptions extends ComponentOptions<Vue> {
    componentName: string;
    [prop : string]: any;
}
export declare class ElementUIComponent extends Vue {

    static install(vue: typeof Vue): void;

    static componentName: string;

    protected getKeyValue<U extends keyof T, T extends object>(key: U): Function;

    /** 渲染函数，创建元素 */
    render(h: Function): any;
}