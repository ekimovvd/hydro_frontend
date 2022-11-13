export interface VLabelParamsInterface {
  for: VLabelParamsForEnum;
  text: VLabelParamsTextEnum;
}

export enum VLabelParamsForEnum {
  default = "",
  authFormLogin = "authFormLogin",
  authFormPassword = "authFormPassword",
  stationsFormName = "stationsFormName",
  stationsFormComment = "stationsFormComment",
}

export enum VLabelParamsTextEnum {
  default = "",
  login = "Логин",
  password = "Пароль",
  nearestMeteo = "1-ая метеостанция",
  areaCenterMeteo = "2-ая метеостанция",
  postName = "Название поста",
  comment = "Комментарий",
  station = "Пост",
  taskType = "Тип задачи",
  status = "Состояние",
  mode = "Точка отсчёта",
  calculationPeriod = "Период расчёта",
  period = "Интервал, сутки",
  periodExt = "Интервал расширенный, сутки",
  calcStepDays = "Шаг, сутки",
  interval = "Интервал расчёта",
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
