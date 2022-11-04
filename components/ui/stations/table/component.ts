import { Component, Prop, Vue } from "nuxt-property-decorator";

import VTable from "~/components/shared/vTable/component/component";
import VButton from "~/components/shared/vButton/component/component";

import { EventEnum } from "~/pages/stations/constants";

import {
  VTableColumnInterface,
  VTableParamsInterface,
} from "~/shared/components/vTable/factory";
import {
  HydroStationFactory,
  HydroStationInterface,
  WorkStationInterface,
} from "~/shared/entities/stations/factory";
import { VButtonParamsInterface } from "~/shared/components/vButton/factory";
import {
  StatusFactory,
  StatusIdEnum,
  StatusInterface,
  StatusTypeEnum,
} from "~/shared/entities/status/factory";

import {
  COMPONENT_NAME,
  VButtonParamsAdd,
  VTableColumns,
  VTableParams,
} from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTable,
    VButton,
  },
})
export default class StationsTable extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly stations: HydroStationInterface[];
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly workStations: WorkStationInterface[];
  @Prop({
    type: Object,
    required: true,
  })
  readonly station: HydroStationInterface;

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly VTableParams: VTableParamsInterface = VTableParams;
  readonly VTableColumns: VTableColumnInterface[] = VTableColumns;
  readonly VButtonParamsAdd: VButtonParamsInterface = VButtonParamsAdd;

  public hydroStations: HydroStationInterface[] = [];
  public status: StatusInterface = StatusFactory();

  get getStations() {
    return this.stations.slice(0, 10);
  }

  get getWorkStationsIds(): Array<number> {
    return this.workStations.map((element) => element.ID);
  }

  get getButtonAddDisabled(): boolean {
    return !this.hydroStations.length;
  }

  onChangeSelection(value: HydroStationInterface[]) {
    this.hydroStations = value.map((element) => HydroStationFactory(element));
  }

  onChangeRow(value: HydroStationInterface) {
    this.$emit(
      this.station.ID === value.ID ? EventEnum.stationClear : EventEnum.station,
      value
    );
  }

  onChangeStatusLoading(id: string) {
    this.status.id = id;
    this.status.type = StatusTypeEnum.loading;
  }

  onChangeStatusDefault() {
    this.status.id = StatusIdEnum.default;
    this.status.type = StatusTypeEnum.default;
  }

  async onAddStations(): Promise<void> {
    try {
      this.onChangeStatusLoading(StatusIdEnum.stationsTableButtonAdd);
      await this.projectRepository
        .addWorkStations(this.hydroStations.map((element) => element.ID))
        .then(async () => {
          await this.projectRepository.getAllWorkStations().then((value) => {
            this.$emit(EventEnum.workStationsUpdate, value);
            this.onChangeStatusDefault();
            this.onChangeSelection([]);
          });
        });
    } catch (e) {
      this.onChangeStatusDefault();
    }
  }
}
