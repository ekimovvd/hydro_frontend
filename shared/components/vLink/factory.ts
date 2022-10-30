export interface VLinkParamsInterface {
  type: VLinkParamsTypeEnum;
  to: VLinkParamsToEnum;
  icon?: VLinkParamsIconEnum;
  name: VLinkParamsNameEnum;
}

export enum VLinkParamsTypeEnum {
  iconText = "icon-text-component",
}

export enum VLinkParamsToEnum {
  home = "/",
  posts = "/posts",
  operational = "/operational",
  methods = "/methods",
  files = "/files",
  bulletins = "/bulletins",
  forecasts = "/forecasts",
}

export enum VLinkParamsIconEnum {
  home = "bx bx-home",
  posts = "bx bx-line-chart",
  operational = "bx bx-flag",
  methods = "bx bx-slider",
  files = "bx bx-file",
  bulletins = "bx bx-envelope",
  forecasts = "bx bx-layer",
}

export enum VLinkParamsNameEnum {
  home = "Главная",
  posts = "Список постов",
  operational = "Оперативная работа",
  methods = "Методы",
  files = "Файлы",
  bulletins = "Бюллетени",
  forecasts = "Прогнозы",
}

export const VLinkParamsFactory = (
  params: Partial<VLinkParamsInterface> = {}
): VLinkParamsInterface => {
  return {
    type: VLinkParamsTypeEnum.iconText,
    to: VLinkParamsToEnum.home,
    name: VLinkParamsNameEnum.home,
    ...params,
  };
};
