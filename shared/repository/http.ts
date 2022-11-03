import { AxiosInstance } from "axios";
import { AuthInterface, TokenInterface } from "../entities/connect/factory";
import {
  NearestSynopStationInterface,
  WorkStationInterface,
} from "../entities/stations/factory";
import { ProjectRepositoryInterface } from "./factory";
import { Url } from "./url";

export class Http implements ProjectRepositoryInterface {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly url: Url
  ) {}

  // CONNECT
  async token(params: AuthInterface): Promise<TokenInterface> {
    const { data } = await this.axios.post<TokenInterface>(
      this.url.token(),
      params
    );

    return data;
  }

  // STATIONS
  async getAllWorkStations(): Promise<WorkStationInterface[]> {
    const { data } = await this.axios.get<WorkStationInterface[]>(
      this.url.getAllWorkStations()
    );

    return data;
  }

  async getNearestSynopStations(
    ID: string | number
  ): Promise<NearestSynopStationInterface[]> {
    const { data } = await this.axios.get<NearestSynopStationInterface[]>(
      this.url.getNearestSynopStations(ID)
    );

    return data;
  }
}
