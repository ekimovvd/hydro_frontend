import { VTableColumnFactory, VTableColumnInterface, VTableColumnLabelEnum, VTableParamsFactory, VTableParamsInterface } from "~/shared/components/vTable/factory";
import { PhaseValue } from "~/shared/entities/operational/factory";

export const COMPONENT_NAME = "operational-table-expenses";

export const VTableParams: VTableParamsInterface = VTableParamsFactory({
  currentRow: {
    isEnabled: true,
    rowKey: ''
  }
});

export const VTableColumns: VTableColumnInterface[] = [
  VTableColumnFactory({
    prop: "obsTime",
    label: VTableColumnLabelEnum.date,
  }),
  VTableColumnFactory({
    prop: "H",
    label: VTableColumnLabelEnum.H,
  }),
  VTableColumnFactory({
    prop: "q",
    label: VTableColumnLabelEnum.q,
  }),
  VTableColumnFactory({
    prop: "phase",
    label: VTableColumnLabelEnum.status,
    keys: {
      isEnabled: true,
      keys: PhaseValue,
    },
  }),
];


