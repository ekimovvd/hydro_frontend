import {
  VTableAlignEnum,
  VTableColumnFactory,
  VTableColumnInterface,
  VTableColumnLabelEnum,
  VTableIconEnum,
  VTableParamsFactory,
  VTableParamsInterface,
  VTableStyleEnum,
  VTableTypeEnum,
  VTableWidthEnum,
} from "~/shared/components/vTable/factory";

export const COMPONENT_NAME = "stations-work-table";

export const VTableParams: VTableParamsInterface = VTableParamsFactory({
  tag: {
    isEnabled: true,
    prop: "IsFavorite",
    label: VTableIconEnum.star,
    icon: VTableIconEnum.star,
    style: VTableStyleEnum.primary,
    align: VTableAlignEnum.center,
  },
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
    prop: "HydroStation.ObjName",
    label: VTableColumnLabelEnum.river,
    tree: true,
  }),
  VTableColumnFactory({
    prop: "HydroStation.Name",
    label: VTableColumnLabelEnum.postName,
    tree: true,
  }),
  VTableColumnFactory({
    prop: "HydroStation.Lat",
    label: VTableColumnLabelEnum.latitude,
    tree: true,
  }),
  VTableColumnFactory({
    prop: "HydroStation.Lng",
    label: VTableColumnLabelEnum.longitude,
    tree: true,
  }),
];
