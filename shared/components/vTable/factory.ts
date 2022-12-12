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
  tree: boolean;
  keys: VTableColumnKeysInterface;
  date: boolean;
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

export interface VTableColumnKeysInterface {
  isEnabled: boolean;
  keys: object;
}

export interface VTableCellInterface {
  prop: string;
  keys: object;
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
  post = "Пост",
  task = "Задача",
  status = "Состояние",
  lastRunTime = "Последний запуск",
  scheduledTime = "Запланировано",
  lastRunComment = "Результат запуска",
  on = 'Вкл',
  date = 'Дата',
  pointType = 'Тип точки',
  devQ = '∆Q',
  curveQ = 'Q КР',
  sumT = '∑T',
  phaseStartDate = 'Дата начала фазы',
  recordType = 'Тип записи',
  phaseName = 'Название фазы',
  H = 'H, см',
  q = 'Q, м3/с'
}

export enum VTableIconEnum {
  star = "bx bx-star",
}

export enum VTableStyleEnum {
  default = "default",
  primary = "primary",
  orange = "orange",
}

export enum VTableColumnStyleEnum {
  danger = "danger",
  warning = "warning",
  success = "success",
  primary = "primary",
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
    tree: false,
    keys: {
      isEnabled: false,
      keys: {},
    },
    date: false,
    ...params,
  };
};

export const VTableCellFactory = (
  params: Partial<VTableCellInterface> = {}
): VTableCellInterface => {
  return {
    prop: "",
    keys: {},
    ...params,
  };
};
