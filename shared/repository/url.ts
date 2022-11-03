import { ConnectApiEnum } from "../api/connect/factory";
import { StationsApiEnum } from "../api/stations/factory";

export class Url {
  token(): string {
    return ConnectApiEnum.token;
  }

  getAllWorkStations(): string {
    return StationsApiEnum.getAllWorkStations;
  }

  getNearestSynopStations(ID: string | number): string {
    return `${StationsApiEnum.getNearestSynopStations}${ID}`;
  }
}
