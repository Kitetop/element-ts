<template>
  <div>
    <el-ts-row>
      <el-ts-col
        ><div class="grid-content bg-purple-dark"></div
      ></el-ts-col>
    </el-ts-row>
    <el-ts-row>
      <el-ts-col :sm="{span:12}"><div class="grid-content bg-purple"></div></el-ts-col>
      <el-ts-col :sm="{offset: 2, span: 10}"
        ><div class="grid-content bg-purple-light"></div
      ></el-ts-col>
    </el-ts-row>
    <el-ts-row>
      <el-ts-col :span="8"><div class="grid-content bg-purple"></div></el-ts-col>
      <el-ts-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></el-ts-col>
      <el-ts-col :span="8"><div class="grid-content bg-purple"></div></el-ts-col>
    </el-ts-row>
    <el-ts-row>
      <el-ts-col :span="6"><div class="grid-content bg-purple"></div></el-ts-col>
      <el-ts-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-ts-col>
      <el-ts-col :span="6"><div class="grid-content bg-purple"></div></el-ts-col>
      <el-ts-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-ts-col>
    </el-ts-row>
    <el-ts-row>
      <el-ts-col :span="4"><div class="grid-content bg-purple"></div></el-ts-col>
      <el-ts-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></el-ts-col>
      <el-ts-col :span="4"><div class="grid-content bg-purple"></div></el-ts-col>
      <el-ts-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></el-ts-col>
      <el-ts-col :span="4"><div class="grid-content bg-purple"></div></el-ts-col>
      <el-ts-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></el-ts-col>
    </el-ts-row>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Row extends Vue {}
</script>
<style type="sass">
  .el-ts-row {
    margin-bottom: 20px;
  }
  .el-ts-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

