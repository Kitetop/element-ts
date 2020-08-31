import Col from './src/col'
import Vue from 'vue'
/**
 * 为了将来可以按需运用单个组件
 * @param vue : Vue
 */
Col.install = (vue: typeof Vue) => {
    vue.component(Col.componentName, Col)
}
export default Col;