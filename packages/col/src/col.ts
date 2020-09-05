import ElementUIComponent from "../../component";
import { Prop, Component } from 'vue-property-decorator';
import Row from '../../row/src/row';
import { ResponsiveColumn, ResponsiveColumnProperties } from '../../types/col';
import './col.css';

@Component
export default class Col extends ElementUIComponent {
    /** 自定义标签的名字 */
    static componentName = 'ElTsCol';
    /** 创建的标签名字， 默认是div标签 */
    @Prop({ default: 'div' }) tag !: string;
    /** 栅格占据的列数 */
    @Prop({ default: 24 }) span !: number;
    /** 栅格左侧间隔的列数 */
    @Prop() offset !: number;
    /** 栅格向左移动的列数 */
    @Prop() pull !: number;
    /** 栅格向右移动的列数 */
    @Prop() push !: number;
    /** <768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4}) */
    @Prop() xs !: ResponsiveColumn;
    /** >==768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4}) */
    @Prop() sm !: ResponsiveColumn;
    /** >==992px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4}) */
    @Prop() md !: ResponsiveColumn;
    /** >1200px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4}) */
    @Prop() lg !: ResponsiveColumn;
    /** >1920x 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4}) */
    @Prop() xl !: ResponsiveColumn;

    get gutter() {
        let parent = this.$parent as ElementUIComponent;
        while (parent && parent.$options.componentName !== 'ElTsRow') {
          parent = parent.$parent as ElementUIComponent; 
        }
        return parent ? (parent as Row).gutter : 0;
    }
    
    render(h: Function) {
        const classList: string[] = [];
        const style = {
            paddingLeft: '',
            paddingRight: ''
        };
    
        if (this.gutter) {
          style.paddingLeft = this.gutter / 2 + 'px';
          style.paddingRight = style.paddingLeft;
        }
    
        /** 设置列的偏移以及占据的比例 */
        ['span', 'offset', 'pull', 'push'].forEach(prop => {
            const attr = this.getKeyValue<keyof this['$props'], this>(prop)(this);
          if (attr || Number(attr) === 0) {
            classList.push(
              prop !== 'span'
                ? `el-ts-col-${prop}-${attr}`
                : `el-ts-col-${attr}`
            );
          }
        });
    
        /** 设置列的宽度 */
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
            const attr = this.getKeyValue<keyof this['$props'], this>(size)(this);
          if (typeof attr === 'number') {
            classList.push(`el-ts-col-${size}-${attr}`);
          } else if (typeof attr === 'object') {
            const props = JSON.parse(JSON.stringify(attr)) as ResponsiveColumnProperties;
            props.span && classList.push(`el-ts-col-${size}-${props.span}`);
            props.offset && classList.push(`el-ts-col-${size}-offset-${props.offset}`);
            // classList.push(`el-ts-col-${size}-${props.span}`, `el-ts-col-${size}-offset-${props.offset}`)
          }
        });
    
        return h(this.tag, {
          class: ['el-ts-col', classList],
          style: style
        }, this.$slots.default);
      }
}