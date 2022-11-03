<template>
  <el-table-column :class="b()" :align="params.align">
    <template slot="header" slot-scope="scope">
      <i :class="[b('label'), params.icon, getLabelIconStyleViewClass]"></i>
    </template>
    <template slot-scope="scope">
      <i
        :class="[
          b('tag'),
          params.icon,
          onTagIconStyleViewClass(scope.row[params.prop]),
        ]"
      ></i>
    </template>
  </el-table-column>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
