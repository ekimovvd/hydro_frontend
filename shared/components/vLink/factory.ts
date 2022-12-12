export interface VLinkParamsInterface {
  type: VLinkParamsTypeEnum;
  to: VLinkParamsToEnum;
  icon?: VLinkParamsIconEnum;
  name: VLinkParamsNameEnum;
  style: VLinkParamsStyleEnum;
}

export enum VLinkParamsTypeEnum {
  iconText = "icon-text-component",
  text = "text-component",
}

export enum VLinkParamsToEnum {
  home = "/",
  stations = "/stations",
  operational = "/operational",
  methods = "/methods",
  files = "/files",
  profile = "/profile",
}

export enum VLinkParamsIconEnum {
  home = "bx bx-home",
  stations = "bx bx-line-chart",
  operational = "bx bx-flag",
  methods = "bx bx-slider",
  files = "bx bx-file",
}

export enum VLinkParamsNameEnum {
  home = "Главная",
  stations = "Список постов",
  operational = "Оперативная работа",
  methods = "Методы",
  files = "Файлы",
  auth = "Авторизация",
  profile = "Профиль",
  add = "Добавить",
}

export enum VLinkParamsStyleEnum {
  primary = "primary",
}

export const VLinkParamsFactory = (
  params: Partial<VLinkParamsInterface> = {}
): VLinkParamsInterface => {
  return {
    type: VLinkParamsTypeEnum.iconText,
    to: VLinkParamsToEnum.home,
    name: VLinkParamsNameEnum.home,
    style: VLinkParamsStyleEnum.primary,
    ...params,
  };
};
