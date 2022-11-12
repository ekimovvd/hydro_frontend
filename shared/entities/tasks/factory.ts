import { VTableColumnStyleEnum } from "~/shared/components/vTable/factory";

export interface TaskServerInterface {
  ID: number | null;
  LastRunComment: LastRunCommentEnum | null;
  LastRunTime: string | null;
  ScheduledTime: string;
  StationID: number | null;
  Status: StatusEnum | null;
  TaskTypeID: TaskTypeIDEnum | null;
}

export enum TaskTypeIDEnum {
  acf = "Acf",
  phases = "Phases",
  curveQ = "CurveQ",
  autoQ = "AutoQ",
  tempSum = "TempSum",
  reservoirSingle = "ReservoirSingle",
  reservoirPeriod = "ReservoirPeriod",
  transitionPoints = "TransitionPoints",
}

export const TaskTypeIDValue = {
  Acf: "АКФ",
  Phases: "Расчёт фазы",
  CurveQ: "Расход по кривой расходов-уровней",
  AutoQ: "Расход (авто выбор по фазе)",
  TempSum: "Сумма температур",
  ReservoirSingle: "Водохранилище (оперативный)",
  ReservoirPeriod: "Водохранилище (с коррекцией)",
  TransitionPoints: "Точки для переходного периода",
};

export enum StatusEnum {
  error = -2,
  autoStopped = -1,
  stopped = 0,
  active = 1,
  runItOnce = 2,
}

export const StatusValue = {
  "-2": "Ошибка",
  "-1": "Остановлена автоматически",
  "0": "Остановлена",
  "1": "Задача активна",
  "2": "Запустить однократно",
};

export const StatusValueClass = {
  "-2": VTableColumnStyleEnum.danger,
  "-1": VTableColumnStyleEnum.warning,
  "0": VTableColumnStyleEnum.warning,
  "1": VTableColumnStyleEnum.success,
  "2": VTableColumnStyleEnum.primary,
};

export enum LastRunCommentEnum {
  ok = "Ok",
}

export const LastRunCommentValue = {
  Ok: "Успешно",
  null: "Ошибка",
};

export const LastRunCommentValueClass = {
  Ok: VTableColumnStyleEnum.success,
  null: VTableColumnStyleEnum.danger,
};

export const TaskServerFactory = (
  params: Partial<TaskServerInterface> = {}
): TaskServerInterface => {
  return {
    ID: null,
    LastRunComment: null,
    LastRunTime: null,
    ScheduledTime: "",
    StationID: null,
    Status: null,
    TaskTypeID: null,
    ...params,
  };
};
