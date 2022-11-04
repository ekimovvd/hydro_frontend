import { Component, Prop, Vue } from "nuxt-property-decorator";

import StationsWorkTable from "../components/table/component";
import StationsWorkForm from "../components/form/component";

import {
  WorkStationInterface,
  WorkStationFactory,
} from "~/shared/entities/stations/factory";
import {
  VSelectDataFactory,
  VSelectDataInterface,
} from "~/shared/components/vSelect/factory";
import {
  StatusFactory,
  StatusIdEnum,
  StatusInterface,
  StatusTypeEnum,
} from "~/shared/entities/status/factory";
import { EventEnum } from "~/pages/stations/constants";

import {
  COMPONENT_NAME,
  NotificationDeleteStationError,
  NotificationDeleteStationSuccess,
  NotificationUpdateStationError,
  NotificationUpdateStationSuccess,
} from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    StationsWorkTable,
    StationsWorkForm,
  },
})
export default class StationsWork extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly stations: WorkStationInterface[];

  public form: WorkStationInterface = WorkStationFactory();
  public nearestMeteo: VSelectDataInterface[] = [];
  public areaCenterMeteo: VSelectDataInterface[] = [];
  public status: StatusInterface = StatusFactory();

  readonly projectRepository = this.$projectServices.projectRepository;

  onChangeFormName(value: string): void {
    this.form.Name = value;
  }

  onChangeFormComment(value: string): void {
    this.form.Comment = value;
  }

  onChangeFormIsReservoir(value: boolean): void {
    this.form.IsReservoir = value;
  }

  onChangeFormIsFavorite(value: boolean): void {
    this.form.IsFavorite = value;
  }

  onChangeFormNearestMeteo(value: number): void {
    this.form.NearestMeteoID = value;
  }

  onClearFormNearestMeteo(): void {
    this.form.NearestMeteoID = null;
  }

  onChangeFormAreaCenterMeteo(value: number): void {
    this.form.AreaCenterMeteoID = value;
  }

  onClearFormAreaCenterMeteo(): void {
    this.form.AreaCenterMeteoID = null;
  }

  async onChangeStation(value: WorkStationInterface): Promise<void> {
    this.form = WorkStationFactory(value);

    this.projectRepository.getNearestSynopStations(value.ID).then((data) => {
      const nearestSynopStations = data.map((element) =>
        VSelectDataFactory({ value: element.ID, label: element.Name })
      );
      this.nearestMeteo = nearestSynopStations;
      this.areaCenterMeteo = nearestSynopStations;
    });
  }

  onClearStation(): void {
    this.form = WorkStationFactory();
    this.nearestMeteo = [];
    this.areaCenterMeteo = [];
  }

  onChangeStatusLoading(id: string) {
    this.status.id = id;
    this.status.type = StatusTypeEnum.loading;
  }

  onChangeStatusDefault() {
    this.status.id = StatusIdEnum.default;
    this.status.type = StatusTypeEnum.default;
  }

  async onSaveStation(): Promise<void> {
    try {
      this.onChangeStatusLoading(StatusIdEnum.stationsWorkFormButtonSave);
      await this.projectRepository
        .updateWorkStation(this.form)
        .then(async () => {
          await this.projectRepository.getAllWorkStations().then((value) => {
            this.onChangeStatusDefault();
            this.$emit(EventEnum.workStationsUpdate, value);
            this.$notify(NotificationUpdateStationSuccess);
          });
        });
    } catch (e) {
      this.onChangeStatusDefault();
      this.$notify(NotificationUpdateStationError);
    }
  }

  async onRemoveStation(): Promise<void> {
    try {
      this.onChangeStatusLoading(StatusIdEnum.stationsWorkFormButtonDelete);
      await this.projectRepository
        .forceDeleteWorkStation(this.form.ID)
        .then(async () => {
          await this.projectRepository.getAllWorkStations().then((value) => {
            this.onClearStation();
            this.onChangeStatusDefault();
            this.$emit(EventEnum.workStationsUpdate, value);
            this.$notify(NotificationDeleteStationSuccess);
          });
        });
    } catch (e) {
      this.onChangeStatusDefault();
      this.$notify(NotificationDeleteStationError);
    }
  }
}
