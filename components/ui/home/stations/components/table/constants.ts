import {
  VButtonParamsFactory,
  VButtonParamsInterface,
  VButtonParamsLabelEnum,
} from "~/shared/components/vButton/factory";
import {
  VLinkParamsFactory,
  VLinkParamsInterface,
  VLinkParamsNameEnum,
  VLinkParamsToEnum,
  VLinkParamsTypeEnum,
} from "~/shared/components/vLink/factory";
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
import { StatusIdEnum } from "~/shared/entities/status/factory";

export const COMPONENT_NAME = "home-stations-table";

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
    sortable: true,
  }),
  VTableColumnFactory({
    prop: "HydroStation.ObjName",
    label: VTableColumnLabelEnum.river,
    sortable: true,
  }),
  VTableColumnFactory({
    prop: "HydroStation.Name",
    label: VTableColumnLabelEnum.postName,
    sortable: true,
  }),
  VTableColumnFactory({
    prop: "HydroStation.Lat",
    label: VTableColumnLabelEnum.latitude,
  }),
  VTableColumnFactory({
    prop: "HydroStation.Lng",
    label: VTableColumnLabelEnum.longitude,
  }),
];

export const VButtonParamsPairing: VButtonParamsInterface =
  VButtonParamsFactory({
    id: StatusIdEnum.homeStationsTableButtonPairing,
    label: VButtonParamsLabelEnum.pairing,
    full: false,
  });

export const VButtonParamsDelete: VButtonParamsInterface = VButtonParamsFactory(
  {
    id: StatusIdEnum.homeStationsTableButtonDelete,
    label: VButtonParamsLabelEnum.delete,
    full: false,
  }
);

export const VLinkParams: VLinkParamsInterface = VLinkParamsFactory({
  type: VLinkParamsTypeEnum.text,
  to: VLinkParamsToEnum.stations,
  name: VLinkParamsNameEnum.add,
});
