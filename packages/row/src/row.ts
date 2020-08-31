import { Component, Prop } from "vue-property-decorator";
import ElementUIComponent from "../../component";
import { HorizontalAlignment, VertialAlignment } from '../../types/row';
import './row.scss';

@Component
export default class Row extends ElementUIComponent {
    /** 自定义标签名字 */
    static componentName = 'ElTsRow';
    /** 创建的标签名字， 默认是div标签 */
    @Prop({ default: 'div' }) tag !: string;
    /** 栅格布局的间隔， 默认是0 */
    @Prop({ default: 0 }) gutter !: number;
    /** flex布局下的水平排列方式 */
    @Prop({ default: 'start' }) justify !: HorizontalAlignment;
    /** flex布局下的垂直排列方式 */
    @Prop({ default: 'top' }) align !: VertialAlignment;
    /** 布局模式， 可选flex布局模式 */
    @Prop() type !: string;
    get style() {
        const ret: { marginLeft: string; marginRight: string } = {
            marginLeft: '',
            marginRight: ''
        };
        if (this.gutter) {
            ret.marginLeft = `-${this.gutter / 2}px`;
            ret.marginRight = ret.marginLeft;
        }
        return ret;
    }
    render(h: Function) {
        this.$options.componentName = 'ElTsRow';
        return h(this.tag, {
            class: [
                'el-ts-row',
                this.justify !== 'start' ? `is-justify-${this.justify}` : '',
                this.align !== 'top' ? `is-align-${this.align}` : '',
                { 'el-ts-row-flex': this.type === 'flex' }
            ],
            style: this.style
        }, this.$slots.default)
    }
}