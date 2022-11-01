export interface VLabelParamsInterface {
  for: VLabelParamsForEnum;
  text: VLabelParamsTextEnum;
}

export enum VLabelParamsForEnum {
  default = "",
  authFormLogin = "authFormLogin",
  authFormPassword = "authFormPassword",
  postsFormName = "postsFormName",
  postsFormComment = "postsFormComment",
}

export enum VLabelParamsTextEnum {
  default = "",
  login = "Логин",
  password = "Пароль",
  nearestMeteo = "1-ая метеостанция",
  areaCenterMeteo = "2-ая метеостанция",
  postName = "Название поста",
  comment = "Комментарий",
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
