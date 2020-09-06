import Container from './src/container';
import ContainerVue from './src/container.vue'
import Vue from 'vue';
/**
 * 为了将来可以按需运用单个组件
 * @param vue : Vue
 */
Container.install = (vue: typeof Vue) => {
    vue.component(Container.componentName, ContainerVue);
}
export default Container;