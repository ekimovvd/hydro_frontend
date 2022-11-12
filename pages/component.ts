import { Component, Vue } from "nuxt-property-decorator";

import HomeStations from "~/components/ui/home/stations/component/component";
import VTask from "~/components/shared/vTask/component/component";

import { VLinkParamsNameEnum } from "~/shared/components/vLink/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import { TaskServerInterface } from "~/shared/entities/tasks/factory";

import { COMPONENT_NAME, LAYOUT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
  components: {
    HomeStations,
    VTask,
  },
  head() {
    return {
      title: VLinkParamsNameEnum.home,
    };
  },
})
export default class Home extends Vue {
  public workStations: WorkStationInterface[] = [];
  public serverTasks: TaskServerInterface[] = [];

  async fetch(): Promise<void> {
    const projectRepository = this.$projectServices.projectRepository;

    await Promise.all([
      projectRepository.getAllWorkStations(),
      projectRepository.getAllServerTasks(),
    ]).then(([workStations, serverTasks]) => {
      this.workStations = workStations;
      this.serverTasks = serverTasks;
    });
  }

  onUpdateWorkStations(value: WorkStationInterface[]): void {
    this.workStations = value;
  }

  onUpdateWorkStationsList(): void {
    console.log("work:stations:list:update");
  }
}
