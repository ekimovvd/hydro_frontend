import { Component, Vue, Prop } from "nuxt-property-decorator";
import moment, { utc } from "moment";
import { TransitionPeriodInterface, TransitionPeriodPointInterface } from "~/shared/entities/transition-periods/factory";
import { COMPONENT_NAME, VTableParams, VTableColumns, VPhases, VMonths, VValueInterface } from "./constants";
import { VTableColumnInterface, VTableParamsInterface } from "~/shared/components/vTable/factory";
import VTable from "~/components/shared/vTable/component/component";
import VSelect from "~/components/shared/vSelect/component/component";
import { VSelectDataFactory, VSelectDataInterface, VSelectOptionStyleEnum, VSelectParamsFactory, VSelectParamsInterface, VSelectParamsPlaceholderEnum, VSelectParamsStyleEnum } from "~/shared/components/vSelect/factory";
import MethodsTransitionPeriodsChart from "~/components/ui/methods/transition-periods/chart/component.vue";

@Component({
  name: COMPONENT_NAME,
  components: {
    MethodsTransitionPeriodsChart,
    VTable,
    VSelect
  }
})
export default class MethodsTransitionPeriods extends Vue {
  @Prop({
    type: Array,
    required: true
  }) readonly transitionPeriods: TransitionPeriodInterface[];

  readonly VTableParams: VTableParamsInterface = VTableParams;
  readonly VTableColumns: VTableColumnInterface[] = VTableColumns;

  readonly VPhases: VValueInterface[] = VPhases;
  readonly VMonths: VValueInterface[] = VMonths;

  selectedPeriod = null;

  get periods(): TransitionPeriodInterface[] {
    if (!this.selectPeriod) {
      return null;
    }

    const { type } = this.currentSelectOption;
    const phaseByType = type === VSelectOptionStyleEnum.success ? 1 : 4;

    return this.transitionPeriods.filter(item => item.phase === phaseByType);
  }

  get points(): TransitionPeriodPointInterface[] {
    return this.periods
      ? this.periods.map(item => item.points).flatMap(item => item)
      : [];
  }

  get currentSelectOption(): VSelectDataInterface {
    return this.selectPeriods.find(item => item.value === this.selectPeriod);
  }

  get selectParams(): VSelectParamsInterface {
    let style = VSelectParamsStyleEnum.gray;

    switch (this.currentSelectOption?.type) {
      case VSelectOptionStyleEnum.success:
        style = VSelectParamsStyleEnum.success;
        break;
      case VSelectOptionStyleEnum.violet:
        style = VSelectParamsStyleEnum.violet;
        break;
    };

    return VSelectParamsFactory({
      style,
      placeholder: VSelectParamsPlaceholderEnum.default,
    });
  }

  get selectPeriods(): VSelectDataInterface[] {
    return this.transitionPeriods.map(element => {
      const { periodStart, periodEnd, phase } = element

      return VSelectDataFactory({
        type: phase === 1 ? VSelectOptionStyleEnum.success : VSelectOptionStyleEnum.violet,
        label: this.formattedPeriod(periodStart, periodEnd, phase),
        value: `${periodStart} - ${periodEnd}`
      })
    }
    );
  }

  get selectPeriod(): string {
    return this.selectedPeriod ? this.selectedPeriod : '';
  }

  onSelectPeriod(period: string): void {
    this.selectedPeriod = period;
  }

  onClearPeriod(): void {
    this.selectedPeriod = null;
  }

  private formattedPeriod(periodStart: string, periodEnd: string, phase: number): string {
    const startDate = utc(periodStart);
    const startDateMonth = moment(startDate).format("M");
    const startDateDay = moment(startDate).format("D");
    const startDateMonthString = this.VMonths.find(
      (month) => month.value === startDateMonth
    ).name;

    const endDate = utc(periodEnd);
    const endDateMonth = moment(endDate).format("M");
    const endDateDay = moment(endDate).format("D");
    const endDateMonthString = VMonths.find(
      (month) => month.value === endDateMonth
    ).name;
    const endDateYear = moment(endDate).format("YYYY");

    const date = `${startDateDay} ${startDateMonthString} - ${endDateDay} ${endDateMonthString} ${endDateYear}`
    const currentPhase = this.VPhases.find(item => item.value === phase);

    return `${currentPhase.name} (${date})`;
  }
}
