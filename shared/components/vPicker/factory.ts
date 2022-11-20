export interface VPickerParamsInterface {
  component: VPickerParamsComponentEnum;
  type: VPickerParamsTypeEnum;
  placeholder: VPickerParamsPlaceholderEnum;
  format: VPickerParamsFormatEnum;
}

export enum VPickerParamsComponentEnum {
  date = "date-component",
  time = "time-component",
}

export enum VPickerParamsTypeEnum {
  date = "date",
  time = "time",
  dateTime = "datetime",
}

export enum VPickerParamsPlaceholderEnum {
  date = "Выберите дату",
  scheduledTime = "Выберите дату следующего запуска",
  intervalTime = "Выберите время интервала",
}

export enum VPickerParamsFormatEnum {
  date = "yyyy-MM-DD",
  time = "HH:mm:ss",
  dateTime = "yyyy-MM-dd HH:mm:ss",
}

export const VPickerParamsFactory = (
  params: Partial<VPickerParamsInterface> = {}
): VPickerParamsInterface => {
  return {
    component: VPickerParamsComponentEnum.date,
    type: VPickerParamsTypeEnum.date,
    placeholder: VPickerParamsPlaceholderEnum.date,
    format: VPickerParamsFormatEnum.date,
    ...params,
  };
};
