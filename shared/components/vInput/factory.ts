export interface VInputParamsInterface {
  type: VInputParamsTypeEnum;
  placeholder: VInputParamsPlaceholderEnum;
  id: VInputParamsIdEnum;
}

export enum VInputParamsTypeEnum {
  text = "text-component",
  password = "password-component",
}

export enum VInputParamsPlaceholderEnum {
  text = "Введите текст",
  login = "Введите логин",
  password = "Введите пароль",
}

export enum VInputParamsIdEnum {
  default = "",
  authFormLogin = "authFormLogin",
  authFormPassword = "authFormPassword",
}

export const VInputParamsFixture = (
  params: Partial<VInputParamsInterface> = {}
): VInputParamsInterface => {
  return {
    type: VInputParamsTypeEnum.text,
    placeholder: VInputParamsPlaceholderEnum.text,
    id: VInputParamsIdEnum.default,
    ...params,
  };
};
