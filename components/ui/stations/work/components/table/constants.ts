import {
  VTableParamsAlignEnum,
  VTableParamsFactory,
  VTableParamsIconEnum,
  VTableParamsInterface,
  VTableParamsStyleEnum,
  VTableParamsTypeEnum,
  VTableParamsWidthEnum,
} from "~/shared/components/vTable/factory";

export const COMPONENT_NAME = "stations-work-table";

export const VTableParams: VTableParamsInterface = VTableParamsFactory({
  tag: {
    isEnabled: true,
    prop: "IsFavorite",
    label: VTableParamsIconEnum.star,
    icon: VTableParamsIconEnum.star,
    style: VTableParamsStyleEnum.primary,
    align: VTableParamsAlignEnum.center,
  },
  selection: {
    isEnabled: true,
    type: VTableParamsTypeEnum.selection,
    width: VTableParamsWidthEnum.default,
    align: VTableParamsAlignEnum.center,
  },
  currentRow: {
    isEnabled: true,
    rowKey: "ID",
  },
});
