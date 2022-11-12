<template>
  <div :class="b()">
    <el-table
      ref="table"
      :data="getData"
      :border="params.border"
      :highlight-current-row="params.currentRow.isEnabled"
      :row-key="params.currentRow.rowKey"
      :current-row-key="rowKey"
      :row-class-name="onTableRowClassName"
      :cell-class-name="onTableCellClassName"
      @selection-change="onChangeSelection"
      @row-click="onClickRow"
    >
      <VTableSelection
        v-if="params.selection.isEnabled"
        :params="params.selection"
      />
      <el-table-column
        :class-name="b('row-cell')"
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
        :align="params.align"
        :sortable="column.sortable"
      >
        <template slot-scope="scope">
          {{ onFormattingCell(scope.row, column) }}
        </template>
      </el-table-column>
      <VTableTag v-if="params.tag.isEnabled" :params="params.tag" />
    </el-table>
    <VTablePagination
      :params="params.pagination"
      :total="getTotal"
      @current:page:change="onChangeCurrentPage"
    />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
