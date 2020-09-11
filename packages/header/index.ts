import HeaderVue from './src/header.vue'
import Vue from 'vue';
import { TsVueConstructor } from '../types/component';
/**
 * 为了将来可以按需运用单个组件
 * @param vue : Vue
 */
const Header = HeaderVue as TsVueConstructor;
Header.install = (vue: typeof Vue) => {
    vue.component(Header.componentName, Header);
}
export default Header;