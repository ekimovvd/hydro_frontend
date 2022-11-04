import { Component, Prop, Vue } from "nuxt-property-decorator";

import VTable from "~/components/shared/vTable/component/component";

import {
  VTableColumnInterface,
  VTableParamsInterface,
} from "~/shared/components/vTable/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";

import { COMPONENT_NAME, VTableColumns, VTableParams } from "./constants";
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
  readonly stations: WorkStationInterface[];
  @Prop({
    type: Object,
    required: true,
  })
  readonly form: WorkStationInterface;

  readonly VTableParams: VTableParamsInterface = VTableParams;
  readonly VTableColumns: VTableColumnInterface[] = VTableColumns;

  onChangeSelection(value: WorkStationInterface[]): void {
    console.log(value);
  }

  onChangeRow(value: WorkStationInterface): void {
    const isCheckID = value.ID === this.form.ID;

    this.$emit(isCheckID ? EventEnum.stationClear : EventEnum.station, value);
  }
}
