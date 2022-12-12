export interface TransitionPeriodInterface {
  phase: number;
  periodStart: string;
  periodEnd: string;
  writeTime: string;
  points: TransitionPeriodPointInterface[]
}

export interface TransitionPeriodPointInterface {
  pointID: number;
  obsTime: string;
  pointType: number;
  devQ: number;
  sumT: number;
  curveQ: number;
  isEnabled: boolean;
}
