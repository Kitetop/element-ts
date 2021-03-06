import Vue from 'vue'
import { TsComponentOptions } from './types/component';


class ElementUIComponent extends Vue {
    /** 记录组件名字字段 */
    static componentName: string;
    
    /** 生成标签的前缀 */
    static componentPrefix = 'ElTs';

    $options!: TsComponentOptions;

    /** 装载组件的静态方法 */
    // eslint-disable-next-line
    static install(vue: typeof Vue | any): void { return; }

    /** 根据对象属性名称获得对象属性值 */
    protected getKeyValue<U extends keyof T, T extends object>(key: U) {
        return (obj: T) => { return obj[key] };
    }

    /** Get方法，获得标签前缀 */
    protected get prefix() {
        return ElementUIComponent.componentPrefix;
    }

    /** 渲染函数，创建元素 */
    // eslint-disable-next-line
    public render(h: Function): any { return null; }
}

export default ElementUIComponent;
