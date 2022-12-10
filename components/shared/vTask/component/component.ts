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

import {
  COMPONENT_NAME,
  EventEnum,
  NotificationCreateServerTaskError,
  NotificationCreateServerTaskSuccess,
  NotificationDeleteServerTaskError,
  NotificationDeleteServerTaskSuccess,
  NotificationSaveServerTaskError,
  NotificationSaveServerTaskSuccess,
} from "./constants";
import { CellInterface } from "../components/methods/constants";

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

  readonly projectReposity = this.$projectServices.projectRepository;

  public status: StatusInterface = StatusFactory();
  public task: TaskServerInterface = TaskServerFactory();
  public calculationPeriod: string = "";
  public isReservoir: boolean = false;

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
    const findStation = this.stations.find(
      (station) => station.ID === value.StationID
    );
    this.isReservoir = findStation.IsReservoir;
    this.task = TaskServerFactory(value);
  }

  onClearTask(): void {
    this.task = TaskServerFactory();
  }

  onModificationTask(): TaskServerInterface {
    return {
      LastRunComment: this.task.LastRunComment,
      LastRunTime: this.task.LastRunTime,
      ScheduledTime: this.task.ScheduledTime,
      StationID: this.task.StationID,
      Status: this.task.Status,
      TaskTypeID: this.task.TaskTypeID,
      TaskData: {
        config: {
          "@measuredQHSource": this.task.TaskData.config["@measuredQHSource"],
          "@avgQType": this.task.TaskData.config["@avgQType"],
          "@corrQ": this.task.TaskData.config["@corrQ"],
          "@skipErrors": this.task.TaskData.config["@skipErrors"],
          "@regimeSparseDays": this.task.TaskData.config["@regimeSparseDays"],
          Schedule: this.task.TaskData.config.Schedule,
          CalcPeriodOptions: this.task.TaskData.config.CalcPeriodOptions,
        },
      },
    };
  }

  // STATION
  onUpdateStation(value: number): void {
    const findStation = this.stations.find((station) => station.ID === value);

    this.isReservoir = findStation.IsReservoir;
    this.task.StationID = value;
  }
  onClearStation(): void {
    this.task.StationID = null;
    this.isReservoir = false;
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
    this.task.TaskData.config.Schedule["@mode"] = "";
  }

  // CALCULATION PERIOD
  onUpdateCalculationPeriod(value: string): void {
    this.calculationPeriod = value;
    this.task.TaskData.config.CalcPeriodOptions["@start"] = "";
    this.task.TaskData.config.CalcPeriodOptions["@end"] = "";
  }
  onClearCalculationPeriod(): void {
    this.calculationPeriod = "";
    this.task.TaskData.config.CalcPeriodOptions["@start"] = "";
    this.task.TaskData.config.CalcPeriodOptions["@end"] = "";
  }

  onUpdateCalculationPeriodRelative(value: string): void {
    this.task.TaskData.config.CalcPeriodOptions["@start"] =
      value === "" ? "" : value[0];
    this.task.TaskData.config.CalcPeriodOptions["@end"] =
      value === "" ? "" : value[1];
  }

  onUpdateCalculationPeriodFixed(value: string): void {
    this.task.TaskData.config.CalcPeriodOptions["@start"] =
      value === "" ? "" : value[0];
    this.task.TaskData.config.CalcPeriodOptions["@end"] =
      value === "" ? "" : value[1];
  }

  // INTERVAL
  onUpdateIntervalDays(value: number): void {
    const interval = this.task.TaskData.config.Schedule["@interval"];
    if (value !== undefined) {
      this.task.TaskData.config.Schedule["@interval"] =
        interval !== ""
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
      interval !== "" ? `${interval.split(".")[0]}.${value}` : `0.00:00:00`;
  }

  // PERIOD
  onUpdatePeriod(value: number): void {
    this.task.TaskData.config.ReservoirCalculatorOptions["@period"] =
      value !== undefined ? value.toString() : "";
  }

  // PERIODEXT
  onUpdatePeriodExt(value: number): void {
    this.task.TaskData.config.ReservoirCalculatorOptions["@periodExt"] =
      value !== undefined ? value.toString() : "";
  }

  // CALCSTEPDAYS
  onUpdateCalcStepDays(value: number): void {
    this.task.TaskData.config.ReservoirCalculatorOptions["@calcStepDays"] =
      value !== undefined ? value.toString() : "";
  }

  // CORRQ
  onUpdateCorrQ(value: boolean): void {
    this.task.TaskData.config["@corrQ"] = this.onCapitalizeFirstLetter(
      value.toString()
    );
  }

  // METHODS
  onUpdatePhase(value: CellInterface): void {
    const phaseInfo = this.task.TaskData.config.MethodByPhaseOptions.PhaseInfo;
    const findPhase = phaseInfo.find(
      (phase) =>
        phase["@method"] === value["@method"] &&
        phase["@phase"] === value["@phase"]
    );

    if (findPhase) {
      phaseInfo.splice(phaseInfo.indexOf(findPhase), 1);
    } else {
      phaseInfo.forEach((phase, phaseIndex) => {
        if (phase["@phase"] === value["@phase"]) {
          phaseInfo.splice(phaseIndex, 1);
        }
      });

      phaseInfo.push({
        "@method": value["@method"],
        "@phase": value["@phase"],
      });
    }
  }

  // BUTTONS
  async onTaskCreate(): Promise<void> {
    try {
      this.onChangeStatusLoading(StatusIdEnum.tasksFormButtonCreate);
      const task = this.onModificationTask();

      if (this.isReservoir) {
        task.TaskData.config["ReservoirCalculatorOptions"] =
          this.task.TaskData.config.ReservoirCalculatorOptions;
      } else {
        task.TaskData.config["MethodByPhaseOptions"] =
          this.task.TaskData.config.MethodByPhaseOptions;
      }

      await this.projectReposity.createServerTask(task).then(async () => {
        await this.projectReposity.getAllServerTasks().then((serverTasks) => {
          this.$emit(EventEnum.serverTasksUpdate, serverTasks);
          this.$notify(NotificationCreateServerTaskSuccess);
          this.onChangeStatusDefault();
        });
      });
    } catch (e) {
      this.$notify(NotificationCreateServerTaskError);
      this.onChangeStatusDefault();
    }
  }

  async onTaskSave(): Promise<void> {
    try {
      const task = this.onModificationTask();

      if (this.isReservoir) {
        task.TaskData.config["ReservoirCalculatorOptions"] =
          this.task.TaskData.config.ReservoirCalculatorOptions;
      } else {
        task.TaskData.config["MethodByPhaseOptions"] =
          this.task.TaskData.config.MethodByPhaseOptions;
      }

      this.onChangeStatusLoading(StatusIdEnum.tasksFormButtonSave);
      await this.projectReposity.saveServerTask(this.task).then(async () => {
        await this.projectReposity.getAllServerTasks().then((serverTasks) => {
          this.$emit(EventEnum.serverTasksUpdate, serverTasks);
          this.$notify(NotificationSaveServerTaskSuccess);
          this.onChangeStatusDefault();
        });
      });
    } catch (e) {
      this.$notify(NotificationSaveServerTaskError);
      this.onChangeStatusDefault();
    }
  }

  async onTaskDelete(): Promise<void> {
    try {
      this.onChangeStatusLoading(StatusIdEnum.tasksFormButtonDelete);
      await this.projectReposity
        .deleteServerTask(this.task.ID)
        .then(async () => {
          await this.projectReposity.getAllServerTasks().then((serverTasks) => {
            this.$emit(EventEnum.serverTasksUpdate, serverTasks);
            this.$notify(NotificationDeleteServerTaskSuccess);
            this.onChangeStatusDefault();
            this.isReservoir = false;
            this.task = TaskServerFactory();
            this.calculationPeriod = "";
          });
        });
    } catch (e) {
      this.$notify(NotificationDeleteServerTaskError);
      this.onChangeStatusDefault();
    }
  }
}
