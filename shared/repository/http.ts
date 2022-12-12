import { AxiosInstance } from "axios";
import { VOperationalRequestParams } from "~/pages/operational/constants";
import { AuthInterface, TokenInterface } from "../entities/connect/factory";
import { OperationalFullPhaseHistoryInterface, OperationalMeasuredDischargesInterface, OperationalObsDataInterface, OperationalUpdatePhaseHistoryInterface, OperationalValueInterface } from "../entities/operational/factory";
import {
  HydroStationInterface,
  NearestSynopStationInterface,
  WorkStationInterface,
} from "../entities/stations/factory";
import { TaskServerInterface, TaskServerSummaryInterface } from "../entities/tasks/factory";
import { TransitionPeriodInterface } from "../entities/transition-periods/factory";
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

  // TASKS
  async getAllServerTasks(): Promise<TaskServerInterface[]> {
    const { data } = await this.axios.get<Promise<TaskServerInterface[]>>(
      this.url.getAllServerTasks()
    );

    return data;
  }

  async saveServerTask(task: TaskServerInterface): Promise<string> {
    const { data } = await this.axios.put<Promise<string>>(
      this.url.saveServerTask(),
      task
    );

    return data;
  }

  async createServerTask(task: TaskServerInterface): Promise<string> {
    const { data } = await this.axios.post<Promise<string>>(
      this.url.createServerTask(),
      task
    );

    return data;
  }

  async deleteServerTask(ID: string | number): Promise<string> {
    const { data } = await this.axios.put<Promise<string>>(
      `${this.url.deleteServerTask()}${ID}`
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

  // METHODS
  async getTransitionPeriods(ID: string | number): Promise<TransitionPeriodInterface[]> {
    const { data } = await this.axios.get<TransitionPeriodInterface[]>(
      this.url.getTransitionPeriods(ID)
    );

    return data;
  }

  // OPERATIONAL
  async getObsData(params: VOperationalRequestParams): Promise<OperationalObsDataInterface> {
    const { workStationId, startDate, endDate } = params;
    const url = `${this.url.getObsData(workStationId)}?dtFrom=${startDate}&dtTo=${endDate}`;
    const { data } = await this.axios.get<OperationalObsDataInterface>(url);

    return data;
  }

  async getMeasuredDischarges(params: VOperationalRequestParams): Promise<OperationalMeasuredDischargesInterface[]> {
    const { workStationId, startDate, endDate } = params;
    const url = `${this.url.getMeasuredDischarges(workStationId)}?dtFrom=${startDate}&dtTo=${endDate}`;
    const { data } = await this.axios.get<OperationalMeasuredDischargesInterface[]>(url);

    return data;
  }

  async getPhases(ID: string | number): Promise<OperationalValueInterface[]> {
    const { data } = await this.axios.get<OperationalValueInterface[]>(this.url.getPhases(ID));

    return data;
  }

  async getFullPhaseHistory(ID: string | number): Promise<OperationalFullPhaseHistoryInterface[]> {
    const { data } = await this.axios.get<OperationalFullPhaseHistoryInterface[]>(this.url.getFullPhaseHistory(ID));

    return data;
  }

  async updatePhaseHistory(ID: string | number, params: OperationalUpdatePhaseHistoryInterface): Promise<void> {
    await this.axios.put<void>(this.url.updatePhaseHistory(ID), params);
  }
}
