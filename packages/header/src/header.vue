<template>
  <header class="el-ts-header" :style="{ height }">
    <slot name="default"></slot>
  </header>
</template>

<script lang="ts">
import ElementUIComponent from '../../component';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class Header extends ElementUIComponent {
    static componentName = Header.componentPrefix +  'Header';
    @Prop({default: '60px'}) height !: string;
}
</script>