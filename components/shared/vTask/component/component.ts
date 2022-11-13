import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  TaskServerFactory,
  TaskServerInterface,
} from "~/shared/entities/tasks/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import {
  StatusFactory,
  StatusIdEnum,
  StatusInterface,
  StatusTypeEnum,
} from "~/shared/entities/status/factory";

import VTaskTable from "../components/table/component";
import VTaskForm from "../components/form/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTaskTable,
    VTaskForm,
  },
})
export default class VTask extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly tasks: TaskServerInterface[];
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly stations: WorkStationInterface[];

  public status: StatusInterface = StatusFactory();
  public task: TaskServerInterface = TaskServerFactory();
  public calculationPeriod: string = "";

  onCapitalizeFirstLetter(value: string) {
    return value[0].toUpperCase() + value.slice(1);
  }

  onChangeStatusLoading(id: string): void {
    this.status.id = id;
    this.status.type = StatusTypeEnum.loading;
  }

  onChangeStatusDefault(): void {
    this.status.id = StatusIdEnum.default;
    this.status.type = StatusTypeEnum.default;
  }

  // TASK
  onChangeTask(value: TaskServerInterface): void {
    this.task = TaskServerFactory(value);
  }

  onClearTask(): void {
    this.task = TaskServerFactory();
  }

  // STATION
  onUpdateStation(value: number): void {
    this.task.StationID = value;
  }
  onClearStation(): void {
    this.task.StationID = null;
  }

  // TASK TYPE
  onUpdateTaskType(value: string): void {
    this.task.TaskTypeID = value;
  }
  onClearTaskType(): void {
    this.task.TaskTypeID = null;
  }

  // STATUS
  onUpdateStatus(value: number): void {
    this.task.Status = value;
  }
  onClearStatus(): void {
    this.task.Status = null;
  }

  // SKIP ERRORS
  onUpdateSkipErrors(value: boolean): void {
    this.task.TaskData.config["@skipErrors"] = this.onCapitalizeFirstLetter(
      value.toString()
    );
  }

  // MODE
  onUpdateMode(value: string): void {
    this.task.TaskData.config.Schedule["@mode"] = value;
  }
  onClearMode(): void {
    this.task.TaskData.config.Schedule["@mode"] = null;
  }

  // CALCULATION PERIOD
  onUpdateCalculationPeriod(value: string): void {
    this.calculationPeriod = value;
  }
  onClearCalculationPeriod(): void {
    this.calculationPeriod = "";
  }

  // INTERVAL
  onUpdateInterval(value: number): void {
    console.log("interval");
  }

  // PERIOD
  onUpdatePeriod(value: number): void {
    console.log("period");
  }

  // PERIODEXT
  onUpdatePeriodExt(value: number): void {
    console.log("periodExt");
  }

  // CALCSTEPDAYS
  onUpdateCalcStepDays(value: number): void {
    console.log("calcStepDays");
  }

  // CORRQ
  onUpdateCorrQ(value: boolean): void {
    console.log("corrq");
  }

  // BUTTONS
  onTaskCreate(): void {
    console.log("Task create");
  }

  onTaskSave(): void {
    console.log("Task save");
  }

  onTaskDelete(): void {
    console.log("Task delete");
  }
}
