import Vue from 'vue'
import Row from './row/src/row'
import Col from './col/src/col';
import Container from './container/src/container.vue';
import Header from './header/src/header.vue';
import { TsVueConstructor } from './types/component';
import Footer from './footer/src/footer';
import Main from './main/src/mian';
import Aside from './aside/src/aside';

const components = [
    Row,
    Col,
    Container as TsVueConstructor,
    Header as TsVueConstructor,
    Footer,
    Main,
    Aside
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
    install,
    Row,
    Col,
    Container,
    Header,
    Footer,
}
