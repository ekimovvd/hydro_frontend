import { VPickerParamsFactory, VPickerParamsFormatEnum, VPickerParamsPlaceholderEnum, VPickerParamsTypeEnum } from "~/shared/components/vPicker/factory";
import { VSelectParamsFactory, VSelectParamsInterface, VSelectParamsPlaceholderEnum, VSelectParamsStyleEnum } from "~/shared/components/vSelect/factory";

export const COMPONENT_NAME = "v-filters";

export const VSelectParams: VSelectParamsInterface = VSelectParamsFactory({
  style: VSelectParamsStyleEnum.primary,
  placeholder: VSelectParamsPlaceholderEnum.station,
});

export const VPickerParams = VPickerParamsFactory({
  type: VPickerParamsTypeEnum.dateRange,
  format: VPickerParamsFormatEnum.dateTime,
  placeholder: VPickerParamsPlaceholderEnum.date,
});

export enum EventEnum {
  updateWorkStationId = 'update:selected-work-station-id',
  updateDatePeriod = 'update:selected-date-period'
}

export interface VFiltersDateRangeInterface {
  start: string;
  end: string;
}
