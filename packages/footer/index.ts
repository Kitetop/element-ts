import Footer from './src/footer'
import Vue from 'vue'

/**
 * 为了将来可以按需运用单个组件
 * @param vue : Vue
 */
Footer.install = (vue: typeof Vue) => {
    vue.component(Footer.componentName, Footer);
}
export default Footer;