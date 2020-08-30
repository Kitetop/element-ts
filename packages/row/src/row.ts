import { Component, Prop } from "vue-property-decorator";
import ElementUIComponent from "../../component";
import './row.scss'
import { HorizontalAlignment, VertialAlignment } from '@component/types/row';

@Component
export default class Row extends ElementUIComponent {
    static componentName = 'ElTsRow'; 

    @Prop({ default: 'div' }) tag !: string;
    @Prop() gutter !: number;
    @Prop({ default: 'start' }) justify !: HorizontalAlignment;
    @Prop({ default: 'top'}) align !: VertialAlignment;
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