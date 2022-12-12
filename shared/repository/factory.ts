import {
  NearestSynopStationInterface,
  WorkStationInterface,
  HydroStationInterface,
} from "../entities/stations/factory";
import { AuthInterface, TokenInterface } from "../entities/connect/factory";
import { TaskServerInterface, TaskServerSummaryInterface } from "../entities/tasks/factory";
import { VOperationalRequestParams } from "~/pages/operational/constants";
import { TransitionPeriodInterface } from "../entities/transition-periods/factory";
import { OperationalFullPhaseHistoryInterface, OperationalMeasuredDischargesInterface, OperationalObsDataInterface, OperationalUpdatePhaseHistoryInterface, OperationalValueInterface } from "../entities/operational/factory";

export interface ProjectRepositoryInterface {
  // TOKEN
  token(params?: AuthInterface): Promise<TokenInterface>;

  // TASKS
  getAllServerTasks(): Promise<TaskServerInterface[]>;

  getServerTasksSummary(ID: string | number): Promise<TaskServerSummaryInterface[]>;

  saveServerTask(task: TaskServerInterface): Promise<string>;

  createServerTask(task: TaskServerInterface): Promise<string>;

  deleteServerTask(ID: string | number): Promise<string>;

  // STATIONS
  getAllHydroStations(): Promise<HydroStationInterface[]>;

  getAllWorkStations(): Promise<WorkStationInterface[]>;

  getNearestSynopStations(
    ID: string | number
  ): Promise<NearestSynopStationInterface[]>;

  addWorkStations(params: Array<number>): Promise<string>;

  forceDeleteWorkStation(ID: string | number): Promise<boolean>;

  updateWorkStation(params: WorkStationInterface): Promise<string>;

  // METHODS
  getTransitionPeriods(ID: string | number): Promise<TransitionPeriodInterface[]>;

  // OPERATIONAL
  getObsData(params: VOperationalRequestParams): Promise<OperationalObsDataInterface>;

  getMeasuredDischarges(params: VOperationalRequestParams): Promise<OperationalMeasuredDischargesInterface[]>;

  getPhases(ID: string | number): Promise<OperationalValueInterface[]>;

  getFullPhaseHistory(ID: string | number): Promise<OperationalFullPhaseHistoryInterface[]>;

  updatePhaseHistory(ID: string | number, params: OperationalUpdatePhaseHistoryInterface): Promise<void>;
}

export interface ProjectServicesInterface {
  projectRepository: ProjectRepositoryInterface;
}
