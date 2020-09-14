import Aside from './src/aside';
import Vue from 'vue';

/**
 * 为了将来可以按需运用单个组件
 * @param vue : Vue
 */
Aside.install = (vue: typeof Vue) => {
    vue.component(Aside.componentName, Aside);
}
export default Aside;