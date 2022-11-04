import {
  VButtonParamsFactory,
  VButtonParamsInterface,
  VButtonParamsLabelEnum,
} from "~/shared/components/vButton/factory";
import {
  VTableAlignEnum,
  VTableColumnFactory,
  VTableColumnInterface,
  VTableColumnLabelEnum,
  VTableParamsFactory,
  VTableParamsInterface,
  VTableTypeEnum,
  VTableWidthEnum,
} from "~/shared/components/vTable/factory";
import {
  NotificationCustomClassEnum,
  NotificationFactory,
  NotificationInterface,
  NotificationTypeEnum,
} from "~/shared/entities/notification/factory";
import { StatusIdEnum } from "~/shared/entities/status/factory";

export const COMPONENT_NAME = "stations-table";

export const VTableParams: VTableParamsInterface = VTableParamsFactory({
  selection: {
    isEnabled: true,
    type: VTableTypeEnum.selection,
    width: VTableWidthEnum.default,
    align: VTableAlignEnum.center,
  },
  currentRow: {
    isEnabled: true,
    rowKey: "ID",
  },
});

export const VTableColumns: VTableColumnInterface[] = [
  VTableColumnFactory({
    prop: "ID",
    label: VTableColumnLabelEnum.postCode,
  }),
  VTableColumnFactory({
    prop: "ObjName",
    label: VTableColumnLabelEnum.river,
  }),
  VTableColumnFactory({
    prop: "Name",
    label: VTableColumnLabelEnum.postName,
  }),
  VTableColumnFactory({
    prop: "Lat",
    label: VTableColumnLabelEnum.latitude,
  }),
  VTableColumnFactory({
    prop: "Lng",
    label: VTableColumnLabelEnum.longitude,
  }),
];

export const VButtonParamsAdd: VButtonParamsInterface = VButtonParamsFactory({
  id: StatusIdEnum.stationsTableButtonAdd,
  label: VButtonParamsLabelEnum.add,
  full: false,
});

export const NotificationAddStationSuccess: NotificationInterface =
  NotificationFactory({
    message: "Станции успешно добавлены",
  });

export const NotificationAddStationError: NotificationInterface =
  NotificationFactory({
    message: "Станции не добавлены",
    type: NotificationTypeEnum.error,
    customClass: NotificationCustomClassEnum.error,
  });
