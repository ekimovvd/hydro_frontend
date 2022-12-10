import { VTableCellFactory, VTableCellInterface, VTableColumnFactory, VTableColumnInterface, VTableColumnLabelEnum, VTableParamsFactory, VTableParamsInterface } from "~/shared/components/vTable/factory";
import { StatusValue, StatusValueClass, TaskTypeIDValue } from "~/shared/entities/tasks/factory";

export const COMPONENT_NAME = "operational-table-tasks";

export const VTableParams: VTableParamsInterface = VTableParamsFactory({
  currentRow: {
    isEnabled: true,
    rowKey: 'taskTypeID'
  }
});

export const VTableColumns: VTableColumnInterface[] = [
  VTableColumnFactory({
    prop: "taskTypeID",
    label: VTableColumnLabelEnum.task,
    keys: {
      isEnabled: true,
      keys: TaskTypeIDValue,
    },
  }),
  VTableColumnFactory({
    prop: "status",
    label: VTableColumnLabelEnum.status,
    keys: {
      isEnabled: true,
      keys: StatusValue,
    },
  }),
];

export const VTableCells: VTableCellInterface[] = [
  VTableCellFactory({
    prop: "status",
    keys: StatusValueClass,
  }),
];
