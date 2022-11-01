export interface VSelectParamsInterface {
  type: VSelectParamsTypeEnum;
  style: VSelectParamsStyleEnum;
  placeholder: VSelectParamsPlaceholderEnum;
  popperClass: VSelectParamsPooperClassEnum;
  popperAppendToBody: boolean;
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

export enum VSelectChevronIconEnum {
  down = "bx bx-chevron-down",
  up = "bx bx-chevron-up",
}

export enum VSelectEventEnum {
  select = "select",
  clear = "clear",
}

export enum VSelectParamsPlaceholderEnum {
  default = "Выберите",
  weatherStation1 = "1-я метеостанция",
  weatherStation2 = "2-я метеостанция",
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
