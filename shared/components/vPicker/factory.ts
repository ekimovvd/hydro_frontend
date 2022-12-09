export interface VPickerParamsInterface {
  component: VPickerParamsComponentEnum;
  type: VPickerParamsTypeEnum;
  placeholder: VPickerParamsPlaceholderEnum;
  format: VPickerParamsFormatEnum;
  rangeSeparator: VPickerParamsRangeSeparatorEnum;
  startPlaceholder: VPickerParamsStartPlaceholder;
  endPlaceholder: VPickerParamsEndPlaceholder;
}

export enum VPickerParamsComponentEnum {
  date = "date-component",
  time = "time-component",
}

export enum VPickerParamsTypeEnum {
  date = "date",
  time = "time",
  dateTime = "datetime",
  dateTimeRange = "datetimerange",
}

export enum VPickerParamsPlaceholderEnum {
  date = "Выберите дату",
  scheduledTime = "Выберите дату следующего запуска",
  intervalTime = "Выберите время интервала",
  calculationPeriodRelative = "Выберите относительный период",
  calculationPeriodFixed = "Выберите фиксированный период",
}

export enum VPickerParamsFormatEnum {
  date = "yyyy-MM-DD",
  time = "HH:mm:ss",
  dateTime = "yyyy-MM-dd HH:mm:ss",
  dateTimeRelative = "dd HH:mm",
  dateTimeFixed = "yyyy-MM-dd HH:mm",
}

export enum VPickerParamsRangeSeparatorEnum {
  default = "-",
}

export enum VPickerParamsStartPlaceholder {
  default = "Дата начала",
}

export enum VPickerParamsEndPlaceholder {
  default = "Дата окончания",
}

export const VPickerParamsFactory = (
  params: Partial<VPickerParamsInterface> = {}
): VPickerParamsInterface => {
  return {
    component: VPickerParamsComponentEnum.date,
    type: VPickerParamsTypeEnum.date,
    placeholder: VPickerParamsPlaceholderEnum.date,
    format: VPickerParamsFormatEnum.date,
    rangeSeparator: VPickerParamsRangeSeparatorEnum.default,
    startPlaceholder: VPickerParamsStartPlaceholder.default,
    endPlaceholder: VPickerParamsEndPlaceholder.default,
    ...params,
  };
};
