<template>
  <div>
    <el-ts-container direction="vertical" class="bg-purple-dark">
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </el-ts-container>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Container extends Vue {}
</script>

<style type="sass">
.bg-purple-dark {
  background: #99a9bf;
}
</style>