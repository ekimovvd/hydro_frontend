export interface VInputParamsInterface {
  type: VInputParamsTypeEnum;
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
  postsFormName = "postsFormName",
  postsFormComment = "postsFormComment",
}

export enum VInputParamsTextEnum {
  default = "",
  isReservoir = "Является водохранилищем",
  isFavorite = "Является избранным",
}

export enum VInputEventEnum {
  change = "change",
}

export const VInputParamsFactory = (
  params: Partial<VInputParamsInterface> = {}
): VInputParamsInterface => {
  return {
    type: VInputParamsTypeEnum.text,
    placeholder: VInputParamsPlaceholderEnum.text,
    id: VInputParamsIdEnum.default,
    ...params,
  };
};
