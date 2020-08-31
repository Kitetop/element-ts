import { ElementUIComponent } from './component'

/** 响应式列的参数 */
export interface ResponsiveColumnProperties {
  /** 栅格占据的列数 */
  span: number,
  /** 栅格左侧间隔的列数 */
  offset: number
}

/** 响应式列的参数 */
export type ResponsiveColumn = number | ResponsiveColumnProperties

export declare class Col extends ElementUIComponent {
  /** 栅格占据的列数 */
  span: number

  /** 栅格左侧间隔的列数 */
  offset: number

  /** 栅格向右移动的列数 */
  push: number

  /** 栅格向左移动的列数 */
  pull: number

  /** <768px 响应式栅格数或者栅格属性对象 */
  xs: ResponsiveColumn

  /** ≥768px 响应式栅格数或者栅格属性对象 */
  sm: ResponsiveColumn

  /** ≥992px 响应式栅格数或者栅格属性对象 */
  md: ResponsiveColumn

  /** ≥1200px 响应式栅格数或者栅格属性对象 */
  lg: ResponsiveColumn

  /** ≥1920px 响应式栅格数或者栅格属性对象 */
  xl: ResponsiveColumn

  /** 自定义标签的名字 */
  tag: string
}
