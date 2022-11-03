import {
  NearestSynopStationInterface,
  WorkStationInterface,
} from "../entities/stations/factory";
import { AuthInterface, TokenInterface } from "../entities/connect/factory";

export interface ProjectRepositoryInterface {
  // TOKEN
  token(params?: AuthInterface): Promise<TokenInterface>;

  // STATIONS
  getAllWorkStations(): Promise<WorkStationInterface[]>;
  getNearestSynopStations(
    ID: string | number
  ): Promise<NearestSynopStationInterface[]>;
}

export interface ProjectServicesInterface {
  projectRepository: ProjectRepositoryInterface;
}
