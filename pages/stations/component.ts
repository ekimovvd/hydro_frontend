import { Component, Vue } from "nuxt-property-decorator";

import StationsWork from "~/components/ui/stations/work/component/component";
import StationsTable from "~/components/ui/stations/table/component";
import StationsMap from "~/components/ui/stations/map/component";

import { VLinkParamsNameEnum } from "~/shared/components/vLink/factory";
import {
  HydroStationFactory,
  HydroStationInterface,
  WorkStationFactory,
  WorkStationInterface,
} from "~/shared/entities/stations/factory";

import { COMPONENT_NAME, LAYOUT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
  components: {
    StationsWork,
    StationsTable,
    StationsMap,
  },
  head() {
    return {
      title: VLinkParamsNameEnum.stations,
    };
  },
})
export default class Stations extends Vue {
  public hydroStations: HydroStationInterface[] = [];
  public workStations: WorkStationInterface[] = [];
  public hydroStation: HydroStationInterface = HydroStationFactory();

  async fetch(): Promise<void> {
    const projectRepository = this.$projectServices.projectRepository;

    this.hydroStations = await projectRepository.getAllHydroStations();
    this.workStations = await projectRepository.getAllWorkStations();
  }

  onChangeStation(value: HydroStationInterface): void {
    this.hydroStation = HydroStationFactory(value);
  }

  onClearStation(): void {
    this.hydroStation = HydroStationFactory();
  }

  onUpdateWorkStations(value: WorkStationInterface[]): void {
    this.workStations = value.map((element) => WorkStationFactory(element));
  }
}
