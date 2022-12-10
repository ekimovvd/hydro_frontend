import { VTableColumnFactory, VTableColumnInterface, VTableColumnLabelEnum, VTableParamsFactory, VTableParamsInterface } from "~/shared/components/vTable/factory";

export const COMPONENT_NAME = "operational-table-observations";

export const VTableParams: VTableParamsInterface = VTableParamsFactory({
  currentRow: {
    isEnabled: true,
    rowKey: ''
  }
});

export const VTableColumns: VTableColumnInterface[] = [
  VTableColumnFactory({
    prop: '',
    label: VTableColumnLabelEnum.on,
  }),
];
