export const COMPONENT_NAME = "v-table";

export enum VTableRowStyleViewClass {
  default = "",
  success = "el-table__row--view-success",
}

export enum VTableCellStyleViewClass {
  default = "",
  danger = "v-table__row-cell--view-danger",
  warning = "v-table__row-cell--view-warning",
  success = "v-table__row-cell--view-success",
  primary = "v-table__row-cell--view-primary",
}

export enum EventEnum {
  currentPageChange = "current:page:change",
}
