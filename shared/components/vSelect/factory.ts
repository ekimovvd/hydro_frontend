export interface VSelectParamsInterface {
  type: VSelectParamsTypeEnum;
  style: VSelectParamsStyleEnum;
  placeholder: VSelectParamsPlaceholderEnum;
  popperClass: VSelectParamsPooperClassEnum;
  popperAppendToBody: boolean;
  iconClear: VSelectIconEnum;
}

export interface VSelectDataInterface {
  value?: string | number;
  label?: string;
}

export enum VSelectParamsTypeEnum {
  default = "default-component",
}

export enum VSelectParamsStyleEnum {
  gray = "gray",
  primary = "primary",
}

export enum VSelectParamsPooperClassEnum {
  list = "list",
}

export enum VSelectIconEnum {
  chevronDown = "bx bx-chevron-down",
  chevronUp = "bx bx-chevron-up",
  x = "bx bx-x",
}

export enum VSelectEventEnum {
  select = "select",
  clear = "clear",
}

export enum VSelectParamsPlaceholderEnum {
  default = "Выберите",
  weatherStation1 = "1-я метеостанция",
  weatherStation2 = "2-я метеостанция",
  term = "Выберите срок",
}

export const VSelectParamsFactory = (
  params: Partial<VSelectParamsInterface> = {}
): VSelectParamsInterface => {
  return {
    type: VSelectParamsTypeEnum.default,
    style: VSelectParamsStyleEnum.gray,
    placeholder: VSelectParamsPlaceholderEnum.default,
    popperClass: VSelectParamsPooperClassEnum.list,
    popperAppendToBody: false,
    iconClear: VSelectIconEnum.x,
    ...params,
  };
};

export const VSelectDataFactory = (
  params: Partial<VSelectDataInterface> = {}
): VSelectDataInterface => {
  return {
    ...params,
  };
};
