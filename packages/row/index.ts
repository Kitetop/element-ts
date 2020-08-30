import Row from './src/row'
import Vue from 'vue'
/**
 * 为了将来可以按需运用单个组件
 * @param vue : Vue
 */
Row.install = (vue: typeof Vue) => {
    vue.component(Row.componentName, Row)
}
export default Row;