import { Component, Prop, Vue } from "nuxt-property-decorator";

import VTable from "~/components/shared/vTable/component/component";

import {
  VTableColumnFactory,
  VTableColumnInterface,
  VTableColumnLabelEnum,
  VTableParamsInterface,
} from "~/shared/components/vTable/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";

import { COMPONENT_NAME, VTableParams } from "./constants";
import { EventEnum } from "../../component/constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTable,
  },
})
export default class StationsWorkTable extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly data: WorkStationInterface[];
  @Prop({
    type: Object,
    required: true,
  })
  readonly form: WorkStationInterface;

  readonly VTableParams: VTableParamsInterface = VTableParams;

  get getVTableColumns(): VTableColumnInterface[] {
    return [
      VTableColumnFactory({
        prop: "ID",
        label: VTableColumnLabelEnum.postCode,
      }),
      VTableColumnFactory({
        prop: "HydroStation.ObjName",
        label: VTableColumnLabelEnum.river,
      }),
      VTableColumnFactory({
        prop: "HydroStation.Name",
        label: VTableColumnLabelEnum.postName,
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
  }

  onChangeSelection(value: WorkStationInterface[]): void {
    console.log(value);
  }

  onChangeRow(value: WorkStationInterface): void {
    const isCheckID = value.ID === this.form.ID;

    this.$emit(isCheckID ? EventEnum.stationClear : EventEnum.station, value);
  }
}
