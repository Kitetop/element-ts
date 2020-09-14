import ElementUIComponent from './../../component';
import Component from "vue-class-component";
import { CreateElement } from 'vue/types/umd';
import { Prop } from 'vue-property-decorator';

@Component
export default class Aside extends ElementUIComponent {

    static componentName = Aside.componentPrefix + 'Aside';

    /** 侧边的宽度 */
    @Prop({ default: '300px' }) width !: string;

    render(h: CreateElement) {
        return h('aside', {
            class: ['el-ts-aside'],
            style: {width: this.width}
        }, this.$slots.default);
    }
}
