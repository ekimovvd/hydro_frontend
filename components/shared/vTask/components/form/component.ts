import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VSelect from "~/components/shared/vSelect/component/component";
import VLabel from "~/components/shared/vLabel/component/component";
import VInput from "~/components/shared/vInput/component/component";
import VButton from "~/components/shared/vButton/component/component";
import VPicker from "~/components/shared/vPicker/component/component";

import { VLabelParamsInterface } from "~/shared/components/vLabel/factory";
import {
  VSelectDataFactory,
  VSelectDataInterface,
  VSelectParamsInterface,
} from "~/shared/components/vSelect/factory";
import { TaskServerInterface } from "~/shared/entities/tasks/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import { VInputParamsInterface } from "~/shared/components/vInput/factory";
import { VButtonParamsInterface } from "~/shared/components/vButton/factory";
import { StatusInterface } from "~/shared/entities/status/factory";
import { VPickerParamsInterface } from "~/shared/components/vPicker/factory";

import {
  COMPONENT_NAME,
  VButtonParamsCreate,
  VButtonParamsDelete,
  VButtonParamsSave,
  VInputParamsSkipErrors,
  VLabelParamsCalculationPeriod,
  VLabelParamsMode,
  VLabelParamsStation,
  VLabelParamsStatus,
  VLabelParamsTaskType,
  VSelectDataCalculationPeriod,
  VSelectDataMode,
  VSelectDataStatus,
  VSelectDataTaskType,
  VSelectParamsCalculationPeriod,
  VSelectParamsMode,
  VSelectParamsStation,
  VSelectParamsStatus,
  VSelectParamsTaskType,
  VLabelParamsCalcStepDays,
  VLabelParamsPeriodExt,
  VLabelParamsPeriod,
  VInputParamsInterval,
  VInputParamsPeriod,
  VInputParamsPeriodExt,
  VInputParamsCalcStepDays,
  VInputParamsCorrQ,
  VPickerParamsScheduledTime,
  VLabelParamsScheduledTime,
  VLabelParamsIntervalDays,
  VLabelParamsIntervalTime,
  VPickerParamsIntervalTime,
} from "./constants";
import { EventEnum } from "../../component/constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VSelect,
    VLabel,
    VInput,
    VButton,
    VPicker,
  },
})
export default class VTaskForm extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly form: TaskServerInterface;
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly stations: WorkStationInterface[];
  @Prop({
    type: Object,
    required: true,
  })
  readonly status: StatusInterface;
  @Prop({
    type: String,
    required: true,
  })
  readonly calculationPeriod: string;

  readonly VSelectParamsStation: VSelectParamsInterface = VSelectParamsStation;
  readonly VSelectParamsTaskType: VSelectParamsInterface =
    VSelectParamsTaskType;
  readonly VSelectParamsStatus: VSelectParamsInterface = VSelectParamsStatus;
  readonly VSelectParamsMode: VSelectParamsInterface = VSelectParamsMode;
  readonly VSelectParamsCalculationPeriod: VSelectParamsInterface =
    VSelectParamsCalculationPeriod;

  readonly VSelectDataTaskType: VSelectDataInterface[] = VSelectDataTaskType;
  readonly VSelectDataStatus: VSelectDataInterface[] = VSelectDataStatus;
  readonly VSelectDataMode: VSelectDataInterface[] = VSelectDataMode;
  readonly VSelectDataCalculationPeriod: VSelectDataInterface[] =
    VSelectDataCalculationPeriod;

  readonly VLabelParamsStation: VLabelParamsInterface = VLabelParamsStation;
  readonly VLabelParamsTaskType: VLabelParamsInterface = VLabelParamsTaskType;
  readonly VLabelParamsStatus: VLabelParamsInterface = VLabelParamsStatus;
  readonly VLabelParamsMode: VLabelParamsInterface = VLabelParamsMode;
  readonly VLabelParamsCalculationPeriod: VLabelParamsInterface =
    VLabelParamsCalculationPeriod;
  readonly VLabelParamsIntervalDays: VLabelParamsInterface =
    VLabelParamsIntervalDays;
  readonly VLabelParamsIntervalTime: VLabelParamsInterface =
    VLabelParamsIntervalTime;
  readonly VLabelParamsPeriod: VLabelParamsInterface = VLabelParamsPeriod;
  readonly VLabelParamsPeriodExt: VLabelParamsInterface = VLabelParamsPeriodExt;
  readonly VLabelParamsCalcStepDays: VLabelParamsInterface =
    VLabelParamsCalcStepDays;
  readonly VLabelParamsScheduledTime: VLabelParamsInterface =
    VLabelParamsScheduledTime;

  readonly VInputParamsSkipErrors: VInputParamsInterface =
    VInputParamsSkipErrors;
  readonly VInputParamsInterval: VInputParamsInterface = VInputParamsInterval;
  readonly VInputParamsPeriod: VInputParamsInterface = VInputParamsPeriod;
  readonly VInputParamsPeriodExt: VInputParamsInterface = VInputParamsPeriodExt;
  readonly VInputParamsCalcStepDays: VInputParamsInterface =
    VInputParamsCalcStepDays;
  readonly VInputParamsCorrQ: VInputParamsInterface = VInputParamsCorrQ;

  readonly VButtonParamsCreate: VButtonParamsInterface = VButtonParamsCreate;
  readonly VButtonParamsSave: VButtonParamsInterface = VButtonParamsSave;
  readonly VButtonParamsDelete: VButtonParamsInterface = VButtonParamsDelete;

  readonly VPickerParamsScheduledTime: VPickerParamsInterface =
    VPickerParamsScheduledTime;
  readonly VPickerParamsIntervalTime: VPickerParamsInterface =
    VPickerParamsIntervalTime;

  // STATIONS
  get getStations(): VSelectDataInterface[] {
    return this.stations.map((element) =>
      VSelectDataFactory({ label: element.Name, value: element.ID })
    );
  }

  // STATION
  get getStationValue(): string | number {
    return this.form.StationID === null ? "" : this.form.StationID;
  }

  // TASK TYPE
  get getTaskTypeValue(): string {
    return this.form.TaskTypeID === null ? "" : this.form.TaskTypeID;
  }

  // STATUS
  get getStatusValue(): string | number {
    return this.form.Status === null ? "" : this.form.Status;
  }

  // SCHEDULED TIME
  get getScheduledTimeValue(): string {
    if (this.form.ScheduledTime === "" || this.form.ScheduledTime === null) {
      return "";
    }
    const date = this.form.ScheduledTime.split("T");
    return `${date[0]} ${date[1]}`;
  }

  // SKIP ERRORS
  get getSkipErrorsValue(): boolean {
    return JSON.parse(this.form.TaskData.config["@skipErrors"].toLowerCase());
  }

  // MODE
  get getModeValue(): string {
    return this.form.TaskData.config.Schedule["@mode"] === null
      ? ""
      : this.form.TaskData.config.Schedule["@mode"];
  }

  // INTERVAL
  get getIntervalDaysValue(): number {
    const interval = this.form.TaskData.config.Schedule["@interval"];
    return interval === null ? 0 : parseInt(interval.split(".")[0]);
  }

  get getIntervalTimeValue(): string {
    const interval = this.form.TaskData.config.Schedule["@interval"];
    return interval === null ? "" : interval.split(".")[1];
  }

  // PERIOD
  get getPeriodValue(): number {
    return 0;
  }

  // PERIOD EXT
  get getPeriodExtValue(): number {
    return 0;
  }

  // CALC STEP DAYS
  get getCalcStepDaysValue(): number {
    return 0;
  }

  // CORRQ
  get getCorrQValue() {
    return JSON.parse(this.form.TaskData.config["@corrQ"].toLowerCase());
  }

  // STATION
  @Emit(EventEnum.stationUpdate)
  onSelectStation(value: number): void {}

  @Emit(EventEnum.stationClear)
  onClearStation(): void {}

  // TASK TYPE
  @Emit(EventEnum.taskTypeUpdate)
  onSelectTaskType(value: string): void {}

  @Emit(EventEnum.taskTypeClear)
  onClearTaskType(): void {}

  // STATUS
  @Emit(EventEnum.statusUpdate)
  onSelectStatus(value: number): void {}

  @Emit(EventEnum.statusClear)
  onClearStatus(): void {}

  // SCHEDULED TIME
  @Emit(EventEnum.scheduledTimeUpdate)
  onChangeScheduledTime(value: string): string {
    return value.split(" ").join("T");
  }

  // SKIP ERRORS
  @Emit(EventEnum.skipErrorsUpdate)
  onChangeSkipErrors(value: boolean): void {}

  // MODE
  @Emit(EventEnum.modeUpdate)
  onSelectMode(value: string): void {}

  @Emit(EventEnum.modeClear)
  onClearMode(): void {}

  // CALCULATION PERIOD
  @Emit(EventEnum.calculationPeriodUpdate)
  onSelectCalculationPeriod(value: string): void {}

  @Emit(EventEnum.calculationPeriodClear)
  onClearCalculationPeriod(): void {}

  // Interval
  @Emit(EventEnum.intervalDaysUpdate)
  onChangeIntervalDays(value: number): void {}

  @Emit(EventEnum.intervalTimeUpdate)
  onChangeIntervalTime(value: string): void {}

  // Period
  @Emit(EventEnum.periodUpdate)
  onChangePeriod(value: number): void {}

  // PeriodExt
  @Emit(EventEnum.periodExtUpdate)
  onChangePeriodExt(value: number): void {}

  // CalcStepDays
  @Emit(EventEnum.calcStepDaysUpdate)
  onChangeCalcStepDays(value: number): void {}

  // CorrQ
  @Emit(EventEnum.corrQUpdate)
  onChangeCorrQ(value: boolean): void {}

  // BUTTONS
  @Emit(EventEnum.taskCreate)
  onTaskCreate(): void {}

  @Emit(EventEnum.taskSave)
  onTaskSave(): void {}

  @Emit(EventEnum.taskDelete)
  onTaskDelete(): void {}
}
