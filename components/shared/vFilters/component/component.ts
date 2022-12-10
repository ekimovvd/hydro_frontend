import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";
import { COMPONENT_NAME, VSelectParams, EventEnum, VPickerParams, VFiltersDateRangeInterface } from "./constants";
import VSelect from "~/components/shared/vSelect/component/component";
import VPicker from "~/components/shared/vPicker/component/component";
import { VSelectDataFactory, VSelectDataInterface, VSelectParamsInterface } from "~/shared/components/vSelect/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import { VPickerParamsInterface } from "~/shared/components/vPicker/factory";

enum VFiltersEvent {
}

@Component({
  name: COMPONENT_NAME,
  components: {
    VSelect,
    VPicker
  },
})
export default class VFilters extends Vue {
  @Prop({
    type: Array,
    required: true
  }) readonly workStations: WorkStationInterface[];

  @Prop({
    type: Number,
    default: null
  }) readonly selectedWorkStationId: number;

  @Prop({
    type: Object,
    required: true
  }) readonly selectedDatePeriod: VFiltersDateRangeInterface;

  readonly VSelectParams: VSelectParamsInterface = VSelectParams;

  readonly VPickerParams: VPickerParamsInterface = VPickerParams;

  get hasStartDate(): boolean {
    return Boolean(this.selectedDatePeriod.start);
  }

  get hasEndDate(): boolean {
    return Boolean(this.selectedDatePeriod.end);
  }

  get selectWorkStations(): VSelectDataInterface[] {
    return this.workStations.map(item => VSelectDataFactory({
      label: item.Name,
      value: item.ID
    }));
  }

  get selectWorkStationValue(): string {
    return this.selectedWorkStationId
      ? this.selectWorkStations.find(item => item.value === this.selectedWorkStationId).label
      : '';
  }

  get pickerDatePeriodValue(): string[] {
    return this.hasStartDate && this.hasEndDate
      ? [this.selectedDatePeriod.start, this.selectedDatePeriod.end]
      : ["", ""];
  }

  @Emit(EventEnum.updateWorkStationId)
  updateWorkStationId(workStationId: number): void { };

  updateDatePeriod(datePeriod: string[]): void {
    const [start, end] = datePeriod;
    void this.$emit(EventEnum.updateDatePeriod, { start, end });
  }
}
