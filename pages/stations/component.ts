import { Component, Vue } from "nuxt-property-decorator";

import StationsWork from "~/components/ui/stations/work/component/component";

import { VLinkParamsNameEnum } from "~/shared/components/vLink/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import {
  VSelectDataFactory,
  VSelectDataInterface,
} from "~/shared/components/vSelect/factory";

import { COMPONENT_NAME, LAYOUT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
  components: {
    StationsWork,
  },
  head() {
    return {
      title: VLinkParamsNameEnum.stations,
    };
  },
})
export default class Stations extends Vue {
  public workStations: WorkStationInterface[] = [];

  async fetch(): Promise<void> {
    const projectRepository = this.$projectServices.projectRepository;

    this.workStations = await projectRepository.getAllWorkStations();
  }

  get getNearestMeteo(): VSelectDataInterface[] {
    return [VSelectDataFactory({ label: "1", value: "1" })];
  }

  get getAreaCenterMeteo(): VSelectDataInterface[] {
    return [VSelectDataFactory({ label: "2", value: "2" })];
  }
}
