import { Component, Prop, Vue } from "nuxt-property-decorator";
import { COMPONENT_NAME, VTableParams, VTableColumns, VButtonParams, VSelectParams, VPickerParams, EventEnum } from "./constants";
import VButton from "~/components/shared/vButton/component/component";
import VTable from "~/components/shared/vTable/component/component";
import VSelect from "~/components/shared/vSelect/component/component";
import VPicker from "~/components/shared/vPicker/component/component";
import { VTableColumnInterface, VTableParamsInterface } from "~/shared/components/vTable/factory";
import { OperationalFullPhaseHistoryInterface, OperationalPhaseHistoryParamsInterface } from "~/shared/entities/operational/factory";
import { VButtonParamsInterface } from "~/shared/components/vButton/factory";
import { StatusFactory, StatusInterface } from "~/shared/entities/status/factory";
import { VSelectDataFactory, VSelectDataInterface, VSelectParamsInterface } from "~/shared/components/vSelect/factory";
import { VPhases, VRecType } from "~/components/ui/methods/transition-periods/constants";
import { VPickerParamsInterface } from "~/shared/components/vPicker/factory";

@Component({
  name: COMPONENT_NAME,
  components: {
    VButton,
    VTable,
    VSelect,
    VPicker
  }
})
export default class OperationalTablePhaseHistory extends Vue {
  @Prop({
    type: Array,
    required: true
  }) readonly fullPhaseHistory: OperationalFullPhaseHistoryInterface[];

  public status: StatusInterface = StatusFactory();

  readonly VTableParams: VTableParamsInterface = VTableParams;
  readonly VTableColumns: VTableColumnInterface[] = VTableColumns;

  readonly VButtonParams: VButtonParamsInterface = VButtonParams;

  readonly VSelectParams: VSelectParamsInterface = VSelectParams;

  readonly VPickerParams: VPickerParamsInterface = VPickerParams;

  form: OperationalPhaseHistoryParamsInterface = {
    phase: null,
    startDate: null,
    recType: null
  };

  get isButtonDisabled(): boolean {
    const { phase, startDate, recType } = this.form;
    return phase === null || !startDate || !recType;
  }

  get getPhaseOptions(): VSelectDataInterface[] {
    return VPhases.map(item => VSelectDataFactory({
      label: item.name,
      value: item.value,
    }));
  }

  get getRecTypeOptions(): VSelectDataInterface[] {
    return VRecType.map(item => VSelectDataFactory({
      label: item.name,
      value: item.value,
    }));
  }

  get getPhaseValue(): string {
    return this.form.phase !== null
      ? this.getPhaseOptions.find(item => item.value === this.form.phase).label
      : "";
  }

  get getRecTypeValue(): string {
    return this.form.recType
      ? this.getRecTypeOptions.find(item => item.value === this.form.recType).label
      : "";
  }

  get getStartDateValue(): string {
    if (this.form.startDate === "" || this.form.startDate === null) {
      return "";
    }

    const date = this.form.startDate.split("T");
    return `${date[0]} ${date[1]}`;
  }

  updateForm(key: string, value: number): void {
    this.form[key] = value;
  }

  changeStartDate(startDate: string): void {
    this.form.startDate = startDate.split(" ").join("T");
  }

  createHistory(): void {
    void this.$emit(EventEnum.createHistory, { toAdd: [this.form] });
    this.form = { phase: null, startDate: null, recType: null };
  }
}
