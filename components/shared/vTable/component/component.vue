<template>
  <el-table
    :class="b()"
    :data="data"
    :border="params.border"
    :highlight-current-row="params.currentRow.isEnabled"
    :row-key="params.currentRow.rowKey"
    :current-row-key="rowKey"
    @row-click="onClickRow"
  >
    <VTableSelection
      v-if="params.selection.isEnabled"
      :params="params.selection"
    />
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      :prop="column.prop"
      :label="column.label"
      :align="params.align"
    >
    </el-table-column>
    <VTableTag v-if="params.tag.isEnabled" :params="params.tag" />
  </el-table>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
