export interface OperationalObsDataInterface {
  autumnSums: OperationalValueInterface[];
  hydroDaily: OperationalObsHydroDailyInterface[];
  icePhenomena: OperationalObsIcePhenomenaInterface[];
  objCondition: OperationalObsIcePhenomenaInterface[];
  prc: OperationalObsPrcInterface[];
  springSums: OperationalValueInterface[];
  tAirMax: OperationalValueInterface[];
  tAirMean: OperationalValueInterface[];
  tAirMin: OperationalValueInterface[];
}

export interface OperationalValueInterface {
  dateTime: string;
  value: number;
}

export interface OperationalObsHydroDailyInterface {
  dateTime: string;
  value: OperationalObsHydroDailyValueInterface[];
}

export interface OperationalObsHydroDailyValueInterface {
  dH: number;
  h: number;
  iceDepth: number;
  q: number;
  qcurve: number;
  snowDepth: number;
  t: number;
  twater: number;
}

export interface OperationalObsIcePhenomenaInterface {
  dateTime: string;
  value: OperationalObsIcePhenomenaValueInterface[];
}

export interface OperationalObsIcePhenomenaValueInterface {
  code: number;
  intensity: number;
  message: string;
}

export interface OperationalObsPrcInterface {
  dateTime: string;
  value: OperationalObsPrcValueInterface[];
}

export interface OperationalObsPrcValueInterface {
  rainTotal: number;
  snowTotal: number;
}

export interface OperationalFullPhaseHistoryInterface {
  phase: number;
  recType: number;
  startDate: string;
}

export interface OperationalMeasuredDischargesInterface {
  H: number;
  f: number;
  h: number;
  obsTime: string;
  phase: number;
  q: number;
}

export interface OperationalUpdatePhaseHistoryInterface {
  toDelete?: string[];
  toAdd?: OperationalPhaseHistoryParamsInterface[];
  toUpdate?: OperationalPhaseHistoryParamsInterface[];
}

export interface OperationalPhaseHistoryParamsInterface {
  phase: number;
  startDate: string;
  recType: number;
}

export const PhaseValue = {
  "0": "Неизвестно",
  "1": "Весенний период",
  "2": "Открытое русло",
  "3": "Зарастание",
  "4": "Осенний период",
  "5": "Ледостав",
};

export const RecordTypeValue = {
  "1": "Автоматически",
  "2": "Вручную",
  "3": "Временная"
};
