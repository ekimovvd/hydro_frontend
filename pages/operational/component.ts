import { Component, Vue, Watch } from "nuxt-property-decorator";
import { VLinkParamsNameEnum } from "~/shared/components/vLink/factory";
import { COMPONENT_NAME, LAYOUT_NAME, VOperationalRequestParams } from "./constants";
import VFilters from '~/components/shared/vFilters/component/component.vue';
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import { VFiltersDateRangeInterface } from "~/components/shared/vFilters/component/constants";
import { OperationalFullPhaseHistoryInterface, OperationalMeasuredDischargesInterface, OperationalObsDataInterface, OperationalUpdatePhaseHistoryInterface } from "~/shared/entities/operational/factory";
import { TaskServerSummaryInterface } from "~/shared/entities/tasks/factory";
import VOperationalTableTasks from '~/components/ui/operational/table/tasks/component.vue';
import VOperationalTablePhaseHistory from '~/components/ui/operational/table/phase-history/component.vue';
import VOperationalTableExpenses from '~/components/ui/operational/table/expenses/component.vue';

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
  components: {
    VFilters,
    VOperationalTableTasks,
    VOperationalTablePhaseHistory,
    VOperationalTableExpenses
  },
  head() {
    return {
      title: VLinkParamsNameEnum.operational,
    };
  },
})
export default class Methods extends Vue {
  public workStations: WorkStationInterface[] = [];
  public obsData: OperationalObsDataInterface = null;
  public measuredDischarges: OperationalMeasuredDischargesInterface[] = [];
  public serverTasksSummary: TaskServerSummaryInterface[] = [];
  public fullPhaseHistory: OperationalFullPhaseHistoryInterface[] = [];

  selectedWorkStationId: number = null;
  selectedDatePeriod: VFiltersDateRangeInterface = {
    start: "",
    end: ""
  };

  get requestParams(): VOperationalRequestParams {
    return {
      workStationId: this.selectedWorkStationId,
      startDate: this.selectedDatePeriod.start,
      endDate: this.selectedDatePeriod.end
    };
  }

  async fetch(): Promise<void> {
    const projectRepository = this.$projectServices.projectRepository;

    await Promise.all([
      projectRepository.getAllWorkStations(),
    ]).then(([workStations]) => {
      this.workStations = workStations;
    });
  }

  async getTableData(): Promise<void> {
    const projectRepository = this.$projectServices.projectRepository;
    const { workStationId } = this.requestParams;

    await Promise.all([
      projectRepository.getObsData(this.requestParams),
      projectRepository.getMeasuredDischarges(this.requestParams),
      projectRepository.getServerTasksSummary(workStationId),
      projectRepository.getFullPhaseHistory(workStationId),
    ]).then(([obsData, measuredDischarges, serverTasksSummary, fullPhaseHistory]) => {
      this.obsData = obsData;
      this.measuredDischarges = measuredDischarges;
      this.serverTasksSummary = serverTasksSummary;
      this.fullPhaseHistory = fullPhaseHistory;
    });
  }

  async createPhaseHistory(params: OperationalUpdatePhaseHistoryInterface): Promise<void> {
    const projectRepository = this.$projectServices.projectRepository;

    await Promise.all([
      projectRepository.updatePhaseHistory(this.selectedWorkStationId, params)
    ]).then(async () => {
      this.fullPhaseHistory = await projectRepository.getFullPhaseHistory(this.selectedWorkStationId);
    });
  }

  @Watch('requestParams')
  async changeRequestParams(requestParams: VOperationalRequestParams): Promise<void> {
    if (!requestParams.workStationId) {
      return;
    }

    await this.getTableData();
  }
}
