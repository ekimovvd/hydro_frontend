import { Component, Vue } from "nuxt-property-decorator";

import HomeStations from "~/components/ui/home/stations/component/component";

import { VLinkParamsNameEnum } from "~/shared/components/vLink/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";

import { COMPONENT_NAME, LAYOUT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
  components: {
    HomeStations,
  },
  head() {
    return {
      title: VLinkParamsNameEnum.home,
    };
  },
})
export default class Home extends Vue {
  public workStations: WorkStationInterface[] = [];

  async fetch(): Promise<void> {
    const projectRepository = this.$projectServices.projectRepository;

    await Promise.all([projectRepository.getAllWorkStations()]).then(
      ([workStations]) => {
        this.workStations = workStations;
      }
    );
  }

  onUpdateWorkStations(value: WorkStationInterface[]): void {
    this.workStations = value;
  }

  onUpdateWorkStationsList(): void {
    console.log("work:stations:list:update");
  }
}
