import Vue from 'vue'
import Row from './row/src/row'
import Col from './col/src/col';
// import Container from './container/src/container.vue';
// import { TsVueConstructor } from './types/component';

const components = [
    Row,
    Col,
    // Container as TsVueConstructor
];

/** 装载所有的组件 */
const install = (vue: typeof Vue) => {
    components.forEach(component => {
        console.log(component.componentName, 'name')
        vue.component(component.componentName, component)
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