import Vue from 'vue'
import Row from './row/src/row'

const components = [
    Row
];

/** 装载所有的组件 */
const install = (vue: typeof Vue, opt = {}) => {
    components.forEach(component => {
        Vue.component(component.componentName, component)
    })
}
if (typeof window != 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    Row,
    install
}