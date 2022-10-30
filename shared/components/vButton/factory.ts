export interface VButtonParamsInterface {
  type: VButtonParamsTypeEnum;
  label?: VButtonParamsLabelEnum;
  icon?: VButtonParamsIconEnum;
  style: VButtonParamsStyleEnum;
  full: boolean;
}

export enum VButtonParamsTypeEnum {
  icon = "icon-component",
  text = "text-component",
}

export enum VButtonParamsLabelEnum {
  auth = "Войти",
}

export enum VButtonParamsIconEnum {}

export enum VButtonParamsStyleEnum {
  primary = "primary",
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
