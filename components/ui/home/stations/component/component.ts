import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  WorkStationFactory,
  WorkStationInterface,
} from "~/shared/entities/stations/factory";
import {
  StatusFactory,
  StatusIdEnum,
  StatusInterface,
  StatusTypeEnum,
} from "~/shared/entities/status/factory";
import { EventEnum } from "~/pages/constants";

import HomeStationsConfig from "../components/config/component";
import HomeStationsTable from "../components/table/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    HomeStationsConfig,
    HomeStationsTable,
  },
})
export default class HomeStations extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly stations: WorkStationInterface[];

  readonly projectRepository = this.$projectServices.projectRepository;

  public station: WorkStationInterface = WorkStationFactory();
  public status: StatusInterface = StatusFactory();

  onChangeStatusLoading(id: string): void {
    this.status.id = id;
    this.status.type = StatusTypeEnum.loading;
  }

  onChangeStatusDefault(): void {
    this.status.id = StatusIdEnum.default;
    this.status.type = StatusTypeEnum.default;
  }

  onUpdateStation(value: WorkStationInterface): void {
    this.station = value;
  }

  onClearStation(): void {
    this.station = WorkStationFactory();
  }

  async onDeleteStation(value: WorkStationInterface): Promise<void> {
    try {
      this.onChangeStatusLoading(StatusIdEnum.homeStationsTableButtonDelete);
      await this.projectRepository
        .forceDeleteWorkStation(value.ID)
        .then(async () => {
          await Promise.all([this.projectRepository.getAllWorkStations()]).then(
            ([workStations]) => {
              this.$emit(EventEnum.workStationsUpdate, workStations);
              this.$emit(EventEnum.workStationsListUpdate);
              this.onChangeStatusDefault();
              this.onClearStation();
            }
          );
        });
    } catch (e) {
      this.onChangeStatusDefault();
      this.onClearStation();
    }
  }
}
