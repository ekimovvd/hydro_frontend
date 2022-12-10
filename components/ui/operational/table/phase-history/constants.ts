import { VButtonParamsFactory, VButtonParamsLabelEnum } from "~/shared/components/vButton/factory";
import { VPickerParamsFactory, VPickerParamsFormatEnum, VPickerParamsPlaceholderEnum, VPickerParamsTypeEnum } from "~/shared/components/vPicker/factory";
import { VSelectParamsFactory, VSelectParamsInterface, VSelectParamsPlaceholderEnum } from "~/shared/components/vSelect/factory";
import { VTableColumnFactory, VTableColumnInterface, VTableColumnLabelEnum, VTableParamsFactory, VTableParamsInterface } from "~/shared/components/vTable/factory";
import { PhaseValue, RecordTypeValue } from "~/shared/entities/operational/factory";
import { StatusIdEnum } from "~/shared/entities/status/factory";

export const COMPONENT_NAME = "operational-table-phase-history";

export const VTableParams: VTableParamsInterface = VTableParamsFactory({
  currentRow: {
    isEnabled: true,
    rowKey: ''
  }
});

export const VTableColumns: VTableColumnInterface[] = [
  VTableColumnFactory({
    prop: "startDate",
    label: VTableColumnLabelEnum.phaseStartDate,
  }),
  VTableColumnFactory({
    prop: "phase",
    label: VTableColumnLabelEnum.phaseName,
    keys: {
      isEnabled: true,
      keys: PhaseValue
    }
  }),
  VTableColumnFactory({
    prop: "recType",
    label: VTableColumnLabelEnum.recordType,
    keys: {
      isEnabled: true,
      keys: RecordTypeValue
    }
  }),
];

export const VButtonParams = VButtonParamsFactory({
  id: StatusIdEnum.tasksFormButtonCreate,
  label: VButtonParamsLabelEnum.create,
  full: false
});

export const VSelectParams: VSelectParamsInterface = VSelectParamsFactory({
  placeholder: VSelectParamsPlaceholderEnum.default,
});

export const VPickerParams = VPickerParamsFactory({
  type: VPickerParamsTypeEnum.dateTime,
  format: VPickerParamsFormatEnum.dateTime,
  placeholder: VPickerParamsPlaceholderEnum.date,
});

export enum EventEnum {
  createHistory = 'create-history',
}
