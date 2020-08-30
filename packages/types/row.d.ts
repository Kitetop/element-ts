import { ElementUIComponent } from "./component";

export type HorizontalAlignment = 'start' | 'end' | 'center' | 'space-around' | 'space-betwee';
export type VertialAlignment = 'top' | 'middle' | 'bottom';
export declare class Row extends ElementUIComponent {
    tag: string;
    gutter: number;
    justify: HorizontalAlignment;
    align: VertialAlignment;
    type: string;
    render(h: Function): any;
}