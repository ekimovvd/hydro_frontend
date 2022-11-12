import {
  VTableCellFactory,
  VTableCellInterface,
  VTableColumnFactory,
  VTableColumnInterface,
  VTableColumnLabelEnum,
  VTableParamsFactory,
  VTableParamsInterface,
} from "~/shared/components/vTable/factory";
import {
  LastRunCommentValue,
  LastRunCommentValueClass,
  StatusValue,
  StatusValueClass,
  TaskTypeIDValue,
} from "~/shared/entities/tasks/factory";

export const COMPONENT_NAME = "v-task-table";

export const VTableParams: VTableParamsInterface = VTableParamsFactory({
  selection: {
    isEnabled: false,
  },
  currentRow: {
    isEnabled: true,
    rowKey: "ID",
  },
});

export const VTableColumns: VTableColumnInterface[] = [
  VTableColumnFactory({
    prop: "StationID",
    label: VTableColumnLabelEnum.post,
  }),
  VTableColumnFactory({
    prop: "TaskTypeID",
    label: VTableColumnLabelEnum.task,
    keys: {
      isEnabled: true,
      keys: TaskTypeIDValue,
    },
  }),
  VTableColumnFactory({
    prop: "Status",
    label: VTableColumnLabelEnum.status,
    keys: {
      isEnabled: true,
      keys: StatusValue,
    },
  }),
  VTableColumnFactory({
    prop: "ScheduledTime",
    label: VTableColumnLabelEnum.scheduledTime,
    date: true,
  }),
  VTableColumnFactory({
    prop: "LastRunTime",
    label: VTableColumnLabelEnum.lastRunTime,
    date: true,
  }),
  VTableColumnFactory({
    prop: "LastRunComment",
    label: VTableColumnLabelEnum.lastRunComment,
    keys: {
      isEnabled: true,
      keys: LastRunCommentValue,
    },
  }),
];

export const VTableCells: VTableCellInterface[] = [
  VTableCellFactory({
    prop: "Status",
    keys: StatusValueClass,
  }),
  VTableCellFactory({
    prop: "LastRunComment",
    keys: LastRunCommentValueClass,
  }),
];
