import { VTableColumnStyleEnum } from "~/shared/components/vTable/factory";

export interface TaskServerInterface {
  ID: number | null;
  LastRunComment: string | null;
  LastRunTime: string | null;
  ScheduledTime: string;
  StationID: number | null;
  Status: number | null;
  TaskTypeID: string | null;
  TaskData: TaskServerTaskDataInterface;
}

export interface TaskServerSummaryInterface {
  status: number | null;
  taskTypeID: string | null;
}

export interface TaskServerTaskDataInterface {
  config: {
    "@measuredQHSource": string;
    "@avgQType": string;
    "@corrQ": string;
    "@skipErrors": string;
    "@regimeSparseDays": string;
    Schedule: {
      "@runAtScheduledTime": string;
      "@mode": string | null;
      "@interval": string | null;
    };
    CalcPeriodOptions: {
      "@start": string | null;
      "@end": string | null;
    };
    ReservoirCalculatorOptions?: {
      "@period": string | null;
      "@periodExt": string | null;
      "@calcStepDays": string | null;
    };
    MethodByPhaseOptions?: {
      PhaseInfo: TaskServerMethodByPhaseOptions[];
    };
  };
}

export interface TaskServerMethodByPhaseOptions {
  "@phase": string;
  "@method": string;
}

export enum ModeEnum {
  FromLastRun = "FromLastRun",
  OncePerCall = "OncePerCall",
}

export enum ModeValueEnum {
  FromLastRun = "От последнего запуска",
  OncePerCall = "Выровнять по времени",
}

export enum CalculationPeriodEnum {
  relative = "relative",
  fixed = "fixed",
}

export enum CalculationPeriodValueEnum {
  relative = "Относительный",
  fixed = "Фиксированный",
}

export enum TaskTypeIDEnum {
  Acf = "Acf",
  Phases = "Phases",
  CurveQ = "CurveQ",
  AutoQ = "AutoQ",
  TempSum = "TempSum",
  ReservoirSingle = "ReservoirSingle",
  ReservoirPeriod = "ReservoirPeriod",
  TransitionPoints = "TransitionPoints",
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
  params: Partial<TaskServerInterface> = {},
  reservoirCalculatorOptions = {}
): TaskServerInterface => {
  return {
    ID: null,
    LastRunComment: null,
    LastRunTime: null,
    ScheduledTime: "",
    StationID: null,
    Status: null,
    TaskTypeID: null,
    TaskData: {
      config: {
        "@measuredQHSource": "HydroOnly",
        "@avgQType": "Arithmetic",
        "@corrQ": "False",
        "@skipErrors": "False",
        "@regimeSparseDays": "1",
        Schedule: {
          "@runAtScheduledTime": "False",
          "@mode": null,
          "@interval": null,
        },
        CalcPeriodOptions: {
          "@start": null,
          "@end": null,
        },
        ReservoirCalculatorOptions: {
          "@period": null,
          "@periodExt": null,
          "@calcStepDays": null,
        },
        MethodByPhaseOptions: {
          PhaseInfo: [
            {
              "@phase": "Winter",
              "@method": "SimpleQ",
            },
            {
              "@phase": "Spring",
              "@method": "TransitionQBySum",
            },
            {
              "@phase": "Summer",
              "@method": "OpenQNoOvg",
            },
            {
              "@phase": "Overgrowing",
              "@method": "OpenQWithOvg",
            },
            {
              "@phase": "Autumn",
              "@method": "TransitionQByAlpha",
            },
            {
              "@phase": "Unknown",
              "@method": "QurveQ",
            },
          ],
        },
      },
    },
    ...params,
  };
};
