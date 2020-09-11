import ContainerVue from './src/container.vue'
import Vue from 'vue';
import { TsVueConstructor } from '../types/component';
/**
 * 为了将来可以按需运用单个组件
 * @param vue : Vue
 */
const Container = ContainerVue as TsVueConstructor;
Container.install = (vue: typeof Vue) => {
    vue.component(Container.componentName, ContainerVue);
}
export default Container;
