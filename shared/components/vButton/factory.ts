export interface VButtonParamsInterface {
  id: string;
  type: VButtonParamsTypeEnum;
  label?: VButtonParamsLabelEnum;
  style: VButtonParamsStyleEnum;
  full: boolean;
}

export enum VButtonParamsTypeEnum {
  icon = "icon-component",
  text = "text-component",
}

export enum VButtonParamsLabelEnum {
  loading = "Загрузка...",
  auth = "Войти",
  save = "Сохранить",
  add = "Добавить",
  delete = "Удалить",
  pairing = "Сопряжение",
}

export enum VButtonParamsStyleEnum {
  primary = "primary",
}

export enum VButtonEventEnum {
  click = "click",
}

export enum VButtonIconEnum {
  hide = "bx bx-hide",
  show = "bx bx-show",
}

export const VButtonParamsFactory = (
  params: Partial<VButtonParamsInterface>
): VButtonParamsInterface => {
  return {
    id: "",
    type: VButtonParamsTypeEnum.text,
    style: VButtonParamsStyleEnum.primary,
    full: true,
    ...params,
  };
};
