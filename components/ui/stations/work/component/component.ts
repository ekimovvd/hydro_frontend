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

import { COMPONENT_NAME } from "./constants";

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
}
