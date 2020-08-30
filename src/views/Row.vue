<!--
 * @Author: Kitetop
 * @Version: 1.0
 * @Date: 2020-06-15
 * @Description: 
-->
<template>
  <div>
    <el-ts-row>test</el-ts-row>
    <el-ts-row tag="li">test</el-ts-row>
    <el-ts-row type="flex" justify="end">test</el-ts-row>
    <el-ts-row type="flex" justify="center">test</el-ts-row>
    <el-ts-row type="flex" align="bottom">test</el-ts-row>
    <el-ts-row type="flex" align="middle" justify="center">test</el-ts-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import Row from '@component/row/src/row'
export default {
  name: "Row",
};
</script>
