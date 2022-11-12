import {
  NearestSynopStationInterface,
  WorkStationInterface,
  HydroStationInterface,
} from "../entities/stations/factory";
import { AuthInterface, TokenInterface } from "../entities/connect/factory";
import { TaskServerInterface } from "../entities/tasks/factory";

export interface ProjectRepositoryInterface {
  // TOKEN
  token(params?: AuthInterface): Promise<TokenInterface>;

  // TASKS
  getAllServerTasks(): Promise<TaskServerInterface[]>;

  // STATIONS
  getAllHydroStations(): Promise<HydroStationInterface[]>;

  getAllWorkStations(): Promise<WorkStationInterface[]>;

  getNearestSynopStations(
    ID: string | number
  ): Promise<NearestSynopStationInterface[]>;

  addWorkStations(params: Array<number>): Promise<string>;

  forceDeleteWorkStation(ID: string | number): Promise<boolean>;

  updateWorkStation(params: WorkStationInterface): Promise<string>;
}

export interface ProjectServicesInterface {
  projectRepository: ProjectRepositoryInterface;
}
