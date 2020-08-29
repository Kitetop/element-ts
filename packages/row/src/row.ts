import { Component } from "vue-property-decorator";
import ElementUIComponent from "../../component";
import './row.scss'

export type HorizontalAlignment = 'start' | 'end' | 'center' | 'space-around' | 'space-betwee';
export type VertialAlignment = 'top' | 'middle' | 'bottom';

export interface RowProp {
    tag: string;
    gutter: number;
    justify: HorizontalAlignment;
    align: VertialAlignment;
    type: string;
}

@Component({
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        gutter: Number,
        type: String,
        justify: {
            type: String,
            default: 'start'
        },
        align: {
            type: String,
            default: 'top'
        }
    }
})
export default class Row extends ElementUIComponent<RowProp> {
    get style() {
        const ret: { marginLeft: string; marginRight: string } = {
            marginLeft: '',
            marginRight: ''
        };
        if (this.prop.gutter) {
            ret.marginLeft = `-${this.prop.gutter / 2}px`;
            ret.marginRight = ret.marginLeft;
        }
        return ret;
    }
    render(h: Function) {
        this.setProp();
        console.log(this.prop.justify, 'prop');
        return h(this.prop.tag, {
            class: [
                'el-ts-row',
                this.prop.justify !== 'start' ? `is-justify-${this.prop.justify}` : '',
                this.prop.align !== 'top' ? `is-align-${this.prop.align}` : '',
                { 'el-ts-row-flex': this.prop.type === 'flex' }
            ],
            style: this.style
        }, this.$slots.default)
    }
}