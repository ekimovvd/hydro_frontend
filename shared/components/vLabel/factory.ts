export interface VLabelParamsInterface {
  for: VLabelParamsForEnum;
  text: VLabelParamsTextEnum;
}

export enum VLabelParamsForEnum {
  default = "",
  authFormLogin = "authFormLogin",
  authFormPassword = "authFormPassword",
}

export enum VLabelParamsTextEnum {
  default = "",
  login = "Логин",
  password = "Пароль",
}

export const VLabelParamsFactory = (
  params: Partial<VLabelParamsInterface> = {}
): VLabelParamsInterface => {
  return {
    for: VLabelParamsForEnum.default,
    text: VLabelParamsTextEnum.default,
    ...params,
  };
};
