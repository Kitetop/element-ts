import { Component, Prop } from 'vue-property-decorator';
import ElementUIComponent from './../../component';

@Component
export default class Footer extends ElementUIComponent {

    static componentName = Footer.componentPrefix + 'Footer';

    /** 底边栏的高度 */
    @Prop({ default: '60px' }) height !: string;

    render(h: Function) {
        return h('footer', {
            class: ['el-ts-footer'],
            style: {height: this.height}
        }, this.$slots.default)
    }
}