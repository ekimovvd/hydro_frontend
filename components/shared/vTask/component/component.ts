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

  // SCHEDULED TIME
  onUpdateScheduledTime(value: string): void {
    this.task.ScheduledTime = value;
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
  onUpdateIntervalDays(value: number): void {
    const interval = this.task.TaskData.config.Schedule["@interval"];
    if (value !== undefined) {
      this.task.TaskData.config.Schedule["@interval"] =
        interval !== null
          ? `${value}.${interval.split(".")[1]}`
          : `${value}.00:00:00`;
    } else {
      this.task.TaskData.config.Schedule["@interval"] = `0.${
        interval.split(".")[1]
      }`;
    }
  }

  onUpdateIntervalTime(value: string): void {
    const interval = this.task.TaskData.config.Schedule["@interval"];
    this.task.TaskData.config.Schedule["@interval"] =
      interval !== null ? `${interval.split(".")[0]}.${value}` : `0.00:00:00`;
  }

  // PERIOD
  onUpdatePeriod(value: number): void {
    // this.task.TaskData.config.ReservoirCalculatorOptions["@period"] =
    //   value !== undefined ? value : null;
  }

  // PERIODEXT
  onUpdatePeriodExt(value: number): void {
    // this.task.TaskData.config.ReservoirCalculatorOptions["@periodExt"] =
    //   value !== undefined ? value : null;
  }

  // CALCSTEPDAYS
  onUpdateCalcStepDays(value: number): void {
    // this.task.TaskData.config.ReservoirCalculatorOptions["@calcStepDays"] =
    //   value !== undefined ? value : null;
  }

  // CORRQ
  onUpdateCorrQ(value: boolean): void {
    this.task.TaskData.config["@corrQ"] = this.onCapitalizeFirstLetter(
      value.toString()
    );
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
