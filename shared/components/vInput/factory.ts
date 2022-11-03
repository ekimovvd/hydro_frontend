export interface VInputParamsInterface {
  type: VInputParamsTypeEnum;
  inputType: VInputTypeEnum;
  placeholder: VInputParamsPlaceholderEnum;
  id: VInputParamsIdEnum;
  text?: VInputParamsTextEnum;
}

export enum VInputParamsTypeEnum {
  text = "text-component",
  password = "password-component",
  textarea = "textarea-component",
  checkbox = "checkbox-component",
  radio = "radio-component",
}

export enum VInputParamsPlaceholderEnum {
  text = "Введите текст",
  login = "Введите логин",
  password = "Введите пароль",
  postName = "Введите название поста",
  comment = "Введите комментарий",
}

export enum VInputParamsIdEnum {
  default = "",
  authFormLogin = "authFormLogin",
  authFormPassword = "authFormPassword",
  stationsFormName = "stationsFormName",
  stationsFormComment = "stationsFormComment",
}

export enum VInputParamsTextEnum {
  default = "",
  isReservoir = "Является водохранилищем",
  isFavorite = "Является избранным",
}

export enum VInputEventEnum {
  change = "change",
}

export enum VInputTypeEnum {
  text = "text",
  password = "password",
  textarea = "textarea",
}

export const VInputParamsFactory = (
  params: Partial<VInputParamsInterface> = {}
): VInputParamsInterface => {
  return {
    type: VInputParamsTypeEnum.text,
    inputType: VInputTypeEnum.text,
    placeholder: VInputParamsPlaceholderEnum.text,
    id: VInputParamsIdEnum.default,
    ...params,
  };
};
