import { AxiosInstance } from "axios";
import { AuthInterface, TokenInterface } from "../entities/connect/factory";
import {
  HydroStationInterface,
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
  async getAllHydroStations(): Promise<HydroStationInterface[]> {
    const { data } = await this.axios.get<Promise<HydroStationInterface[]>>(
      this.url.getAllHydroStations()
    );

    return data;
  }

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

  async addWorkStations(params: Array<number>): Promise<string> {
    const { data } = await this.axios.post<string>(this.url.addWorkStations(), {
      ids: params,
    });

    return data;
  }

  async forceDeleteWorkStation(ID: string | number): Promise<boolean> {
    const { data } = await this.axios.post<boolean>(
      this.url.forceDeleteWorkStation(ID)
    );

    return data;
  }

  async updateWorkStation(params: WorkStationInterface): Promise<string> {
    const { data } = await this.axios.put<string>(
      this.url.updateWorkStation(),
      params
    );

    return data;
  }
}
