export interface VTableParamsInterface {
  border: boolean;
  rowKey: string;
  tag: VTableTagInterface;
  selection: VTableSelectionInterface;
  currentRow: VTableCurrentRowInterface;
  align: VTableAlignEnum;
  pagination: VTablePaginationInterface;
}

export interface VTableTagInterface {
  isEnabled: boolean;
  prop?: string;
  label?: VTableIconEnum;
  icon?: VTableIconEnum;
  style?: VTableStyleEnum;
  align?: VTableAlignEnum;
}

export interface VTableCurrentRowInterface {
  isEnabled: boolean;
  rowKey?: string | number;
}

export interface VTableColumnInterface {
  prop: string;
  label: VTableColumnLabelEnum;
  sortable: boolean;
}

export interface VTableSelectionInterface {
  isEnabled: boolean;
  type?: VTableTypeEnum;
  width?: VTableWidthEnum;
  align?: VTableAlignEnum;
}

export interface VTablePaginationInterface {
  background: boolean;
  layout: string;
}

export enum VTableColumnLabelEnum {
  default = "",
  postCode = "Код поста",
  river = "Река",
  postName = "Название поста",
  latitude = "Широта",
  longitude = "Долгота",
  postMark = "Отметка поста",
  zeroPost = "Нуль поста",
}

export enum VTableIconEnum {
  star = "bx bx-star",
}

export enum VTableStyleEnum {
  default = "default",
  primary = "primary",
  orange = "orange",
}

export enum VTableEventEnum {
  selection = "selection",
  row = "row",
}

export enum VTableAlignEnum {
  center = "center",
}

export enum VTableWidthEnum {
  default = "55",
}

export enum VTableTypeEnum {
  selection = "selection",
}

export const VTableParamsFactory = (
  params: Partial<VTableParamsInterface> = {}
): VTableParamsInterface => {
  return {
    border: true,
    rowKey: "ID",
    tag: {
      isEnabled: false,
    },
    selection: {
      isEnabled: false,
    },
    currentRow: {
      isEnabled: false,
    },
    align: VTableAlignEnum.center,
    pagination: {
      background: true,
      layout: "pager",
    },
    ...params,
  };
};

export const VTableColumnFactory = (
  params: Partial<VTableColumnInterface> = {}
): VTableColumnInterface => {
  return {
    prop: "",
    label: VTableColumnLabelEnum.default,
    sortable: false,
    ...params,
  };
};
