export interface VButtonParamsInterface {
  id?: string;
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
}

export enum VButtonParamsStyleEnum {
  primary = "primary",
}

export enum VButtonEventEnum {
  click = "click",
}

export const VButtonParamsFactory = (
  params: Partial<VButtonParamsInterface>
): VButtonParamsInterface => {
  return {
    type: VButtonParamsTypeEnum.text,
    style: VButtonParamsStyleEnum.primary,
    full: true,
    ...params,
  };
};
