import Vue from 'vue'
import Row from './row/src/row'
import Col from './col/src/col';

const components = [
    Row,
    Col
];

/** 装载所有的组件 */
const install = (vue: typeof Vue, opt = {}) => {
    components.forEach(component => {
        console.log(component.componentName, 'name')
        Vue.component(component.componentName, component)
    })
}
if (typeof window != 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    Row,
    Col,
    install
}