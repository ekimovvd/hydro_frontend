export interface VTableParamsInterface {
  border: boolean;
  tag: VTableParamsTagInterface;
  selection: VTableParamsSelectionInterface;
  currentRow: VTableParamsCurrentRowInterface;
  align: VTableParamsAlignEnum;
}

export interface VTableParamsTagInterface {
  isEnabled: boolean;
  prop?: string;
  label?: VTableParamsIconEnum;
  icon?: VTableParamsIconEnum;
  style?: VTableParamsStyleEnum;
  align?: VTableParamsAlignEnum;
}

export interface VTableParamsCurrentRowInterface {
  isEnabled: boolean;
  rowKey?: string | number;
}

export interface VTableColumnInterface {
  prop: string;
  label: VTableColumnLabelEnum;
}

export interface VTableParamsSelectionInterface {
  isEnabled: boolean;
  type?: VTableParamsTypeEnum;
  width?: VTableParamsWidthEnum;
  align?: VTableParamsAlignEnum;
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

export enum VTableParamsIconEnum {
  star = "bx bx-star",
}

export enum VTableParamsStyleEnum {
  default = "default",
  primary = "primary",
  orange = "orange",
}

export enum VTableEventEnum {
  selection = "selection",
  row = "row",
}

export enum VTableParamsAlignEnum {
  center = "center",
}

export enum VTableParamsWidthEnum {
  default = "55",
}

export enum VTableParamsTypeEnum {
  selection = "selection",
}

export const VTableParamsFactory = (
  params: Partial<VTableParamsInterface> = {}
): VTableParamsInterface => {
  return {
    border: true,
    tag: {
      isEnabled: false,
    },
    selection: {
      isEnabled: false,
    },
    currentRow: {
      isEnabled: false,
    },
    align: VTableParamsAlignEnum.center,
    ...params,
  };
};

export const VTableColumnFactory = (
  params: Partial<VTableColumnInterface> = {}
): VTableColumnInterface => {
  return {
    prop: "",
    label: VTableColumnLabelEnum.default,
    ...params,
  };
};
