import { Component, Vue, Watch } from "nuxt-property-decorator";
import { VLinkParamsNameEnum } from "~/shared/components/vLink/factory";
import { COMPONENT_NAME, LAYOUT_NAME } from "./constants";
import MethodsTransitionPeriods from '~/components/ui/methods/transition-periods/component.vue'
import { TransitionPeriodInterface } from "~/shared/entities/transition-periods/factory";
import VFilters from '~/components/shared/vFilters/component/component.vue';
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import { VFiltersDateRangeInterface } from "~/components/shared/vFilters/component/constants";

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
  components: {
    VFilters,
    MethodsTransitionPeriods
  },
  head() {
    return {
      title: VLinkParamsNameEnum.methods,
    };
  },
})
export default class Methods extends Vue {
  public transitionPeriods: TransitionPeriodInterface[] = [];
  public workStations: WorkStationInterface[] = [];

  selectedWorkStationId: number = null;
  selectedDatePeriod: VFiltersDateRangeInterface = {
    start: null,
    end: null
  };

  async fetch(): Promise<void> {
    const projectRepository = this.$projectServices.projectRepository;

    await Promise.all([
      projectRepository.getAllWorkStations(),
    ]).then(([workStations]) => {
      this.workStations = workStations;
    });
  }

  async getTransitionPeriods(): Promise<void> {
    const projectRepository = this.$projectServices.projectRepository;

    await Promise.all([
      projectRepository.getTransitionPeriods(this.selectedWorkStationId),
    ]).then(([transitionPeriods]) => {
      this.transitionPeriods = transitionPeriods;
    });
  }

  @Watch('selectedWorkStationId')
  async changeSelectedWorkStationId(workStationId: number): Promise<void> {
    if (!workStationId) {
      return;
    }

    await this.getTransitionPeriods();
  }
}
