import { ElementUIComponent } from "./component";

export type HorizontalAlignment = 'start' | 'end' | 'center' | 'space-around' | 'space-betwee';
export type VertialAlignment = 'top' | 'middle' | 'bottom';
export declare class Row extends ElementUIComponent {
    
    /** 创建的标签名字， 默认是div标签 */
    tag: string;

    /** 栅格布局的间隔， 默认是0 */
    gutter: number;

    /** flex布局下的水平排列方式 */
    justify: HorizontalAlignment;

    /** flex布局下的垂直排列方式 */
    align: VertialAlignment;

    /** 布局模式， 可选flex布局模式 */
    type: string;
}
