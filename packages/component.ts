import Vue from 'vue'
class ElementUIComponent extends Vue {
    /** 记录组件名字字段 */
    static componentName: string;
    /** 装载组件的静态方法 */
    static install(vue: typeof Vue = Vue): void {
        return;
    }
}
export default ElementUIComponent;