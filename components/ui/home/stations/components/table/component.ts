import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VTable from "~/components/shared/vTable/component/component";
import VButton from "~/components/shared/vButton/component/component";
import VLink from "~/components/shared/vLink/component/component";

import { WorkStationInterface } from "~/shared/entities/stations/factory";
import {
  VTableColumnInterface,
  VTableParamsInterface,
} from "~/shared/components/vTable/factory";
import { VButtonParamsInterface } from "~/shared/components/vButton/factory";
import { StatusInterface } from "~/shared/entities/status/factory";
import { VLinkParamsInterface } from "~/shared/components/vLink/factory";

import {
  COMPONENT_NAME,
  VButtonParamsDelete,
  VButtonParamsPairing,
  VLinkParams,
  VTableColumns,
  VTableParams,
} from "./constants";
import { EventEnum } from "../../component/constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTable,
    VButton,
    VLink,
  },
})
export default class HomeStationsTable extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly stations: WorkStationInterface[];
  @Prop({
    type: Object,
    required: true,
  })
  readonly station: WorkStationInterface;
  @Prop({
    type: Object,
    required: true,
  })
  readonly status: StatusInterface;

  readonly VTableParams: VTableParamsInterface = VTableParams;
  readonly VTableColumns: VTableColumnInterface[] = VTableColumns;
  readonly VButtonParamsPairing: VButtonParamsInterface = VButtonParamsPairing;
  readonly VButtonParamsDelete: VButtonParamsInterface = VButtonParamsDelete;
  readonly VLinkParams: VLinkParamsInterface = VLinkParams;

  public selectionStations: WorkStationInterface[] = [];

  get getButtonPairingDisabled(): boolean {
    return !this.selectionStations.length;
  }

  get getButtonDeleteDisabled(): boolean {
    return this.station.ID === null;
  }

  onChangeSelection(value: WorkStationInterface[]): void {
    this.selectionStations = value;
  }

  onChangeRow(value: WorkStationInterface): void {
    this.$emit(
      this.station.ID === value.ID
        ? EventEnum.stationClear
        : EventEnum.stationUpdate,
      value
    );
  }

  onStationPairing(): void {
    console.log("pairing");
  }

  @Emit(EventEnum.stationDelete)
  onStationDelete(): WorkStationInterface {
    return this.station;
  }
}
