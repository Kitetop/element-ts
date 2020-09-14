<template>
  <div>
    <el-ts-container>
      <el-ts-header>Header</el-ts-header>
      <el-ts-container>
        <el-ts-aside width="200px">Aside</el-ts-aside>
        <el-ts-main>Main</el-ts-main>
      </el-ts-container>
      <el-ts-footer>Footer</el-ts-footer>
    </el-ts-container>
    <hr />
    <el-ts-container>
      <el-ts-header>Header</el-ts-header>
        <el-ts-main>Main</el-ts-main>
      <el-ts-footer>Footer</el-ts-footer>
    </el-ts-container>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Containers extends Vue {}
</script>
<style type="sass" scoped>
.el-ts-header,
.el-ts-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-ts-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-ts-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-ts-container {
  margin-bottom: 40px;
}
</style>

