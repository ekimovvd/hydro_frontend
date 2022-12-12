import { ConnectApiEnum } from "../api/connect/factory";
import { MethodsApiEnum } from "../api/methods/factory";
import { OperationalApiEnum } from "../api/operational/factory";
import { StationsApiEnum } from "../api/stations/factory";
import { TasksApiEnum } from "../api/tasks/factory";

export class Url {
  // CONNECT
  token(): string {
    return ConnectApiEnum.token;
  }

  // TASKS
  getAllServerTasks(): string {
    return TasksApiEnum.getAllServerTasks;
  }

  saveServerTask(): string {
    return TasksApiEnum.saveServerTask;
  }

  createServerTask(): string {
    return TasksApiEnum.createServerTask;
  }

  deleteServerTask(): string {
    return TasksApiEnum.deleteServerTask;
  }

  // STATIONS
  getAllHydroStations(): string {
    return StationsApiEnum.getAllHydroStations;
  }

  getAllWorkStations(): string {
    return StationsApiEnum.getAllWorkStations;
  }

  getNearestSynopStations(ID: string | number): string {
    return `${StationsApiEnum.getNearestSynopStations}${ID}`;
  }

  addWorkStations(): string {
    return StationsApiEnum.addWorkStations;
  }

  forceDeleteWorkStation(ID: string | number): string {
    return `${StationsApiEnum.forceDeleteWorkStation}${ID}`;
  }

  updateWorkStation(): string {
    return StationsApiEnum.updateWorkStation;
  }

  // METHODS
  getTransitionPeriods(ID: string | number): string {
    return `${MethodsApiEnum.getTransitionPeriods}${ID}`
  }

  // OPERATIONAL
  getObsData(ID: string | number): string {
    return `${OperationalApiEnum.getObsData}${ID}`;
  }

  getMeasuredDischarges(ID: string | number): string {
    return `${OperationalApiEnum.getMeasuredDischarges}${ID}`;
  }

  getPhases(ID: string | number): string {
    return `${OperationalApiEnum.getPhases}${ID}`;
  }

  getFullPhaseHistory(ID: string | number): string {
    return `${OperationalApiEnum.getFullPhaseHistory}${ID}`;
  }

  updatePhaseHistory(ID: string | number): string {
    return `${OperationalApiEnum.updatePhaseHistory}${ID}`;
  }
}
