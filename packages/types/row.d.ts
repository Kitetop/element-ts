import { ElementUIComponent } from "./component";
import { RowProp } from "@component/row/src/row";

export declare class Row extends ElementUIComponent {
    protected prop: RowProp;
    protected setProp(): void;
    render(h: Function): any;
}