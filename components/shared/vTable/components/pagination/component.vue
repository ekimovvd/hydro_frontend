<template>
  <el-pagination
    :class="b()"
    :background="params.background"
    :layout="params.layout"
    :total="total"
    @current-change="onChangeCurrentPage"
  >
  </el-pagination>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
