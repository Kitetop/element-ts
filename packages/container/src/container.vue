<template>
    <section class="el-ts-container" :class="{ 'is-vertical': isVertical }">
      <slot></slot>
    </section>
</template>

<script lang='ts'>
import Component from 'vue-class-component';
import ElementUIComponent from '../../component';
import { Prop } from 'vue-property-decorator';
import { Direction } from '../../types/container';

@Component
export default class Container extends ElementUIComponent {
    static componentName = 'ElTsContainer';
    @Prop() direction !: Direction;
    get isVertical() {
        if (this.direction === 'vertical') {
            return true;
        } else if(this.direction === 'horizontal') {
            return false;
        }
        return this.$slots && this.$slots['default'] ?
        this.$slots['default'].some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'el-ts-header' || tag === 'el-ts-footer';
        }) : false;      
    }
}
</script>