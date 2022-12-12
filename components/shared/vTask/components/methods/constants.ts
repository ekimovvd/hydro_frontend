import {
  MethodEnum,
  PhaseEnum,
  PhaseNameEnum,
} from "~/shared/entities/phase/factory";

export const COMPONENT_NAME = "v-task-methods";

export interface ColumnInterface {
  id: number;
  name: string;
}

export const COLUMNS: ColumnInterface[] = [
  {
    id: 0,
    name: "КР",
  },
  {
    id: 1,
    name: "УЭ",
  },
  {
    id: 2,
    name: "ОЭ",
  },
  {
    id: 3,
    name: "ОЭК",
  },
  {
    id: 4,
    name: "ИС",
  },
  {
    id: 5,
    name: "СТ",
  },
];

export interface RowInterface {
  id: number;
  name: string;
}

export const ROWS: RowInterface[] = [
  {
    id: 0,
    name: PhaseNameEnum.Winter,
  },
  {
    id: 1,
    name: PhaseNameEnum.Spring,
  },
  {
    id: 2,
    name: PhaseNameEnum.Summer,
  },
  {
    id: 3,
    name: PhaseNameEnum.Overgrowing,
  },
  {
    id: 4,
    name: PhaseNameEnum.Autumn,
  },
  {
    id: 5,
    name: PhaseNameEnum.Unknown,
  },
];

export interface CellInterface {
  id: number;
  "@phase": PhaseEnum;
  "@method": MethodEnum;
  isEnabled: boolean;
}

export const CELLS: CellInterface[] = [
  {
    id: 0,
    "@phase": PhaseEnum.Winter,
    "@method": MethodEnum.QurveQ,
    isEnabled: false,
  },
  {
    id: 1,
    "@phase": PhaseEnum.Winter,
    "@method": MethodEnum.SimpleQ,
    isEnabled: false,
  },
  {
    id: 2,
    "@phase": PhaseEnum.Winter,
    "@method": MethodEnum.OpenQNoOvg,
    isEnabled: false,
  },
  {
    id: 3,
    "@phase": PhaseEnum.Winter,
    "@method": MethodEnum.OpenQWithOvg,
    isEnabled: true,
  },
  {
    id: 4,
    "@phase": PhaseEnum.Winter,
    "@method": MethodEnum.TransitionQByAlpha,
    isEnabled: true,
  },
  {
    id: 5,
    "@phase": PhaseEnum.Winter,
    "@method": MethodEnum.TransitionQBySum,
    isEnabled: true,
  },
  {
    id: 6,
    "@phase": PhaseEnum.Spring,
    "@method": MethodEnum.QurveQ,
    isEnabled: false,
  },
  {
    id: 7,
    "@phase": PhaseEnum.Spring,
    "@method": MethodEnum.SimpleQ,
    isEnabled: false,
  },
  {
    id: 8,
    "@phase": PhaseEnum.Spring,
    "@method": MethodEnum.OpenQNoOvg,
    isEnabled: true,
  },
  {
    id: 9,
    "@phase": PhaseEnum.Spring,
    "@method": MethodEnum.OpenQWithOvg,
    isEnabled: true,
  },
  {
    id: 10,
    "@phase": PhaseEnum.Spring,
    "@method": MethodEnum.TransitionQByAlpha,
    isEnabled: true,
  },
  {
    id: 11,
    "@phase": PhaseEnum.Spring,
    "@method": MethodEnum.TransitionQBySum,
    isEnabled: false,
  },
  {
    id: 12,
    "@phase": PhaseEnum.Summer,
    "@method": MethodEnum.QurveQ,
    isEnabled: false,
  },
  {
    id: 13,
    "@phase": PhaseEnum.Summer,
    "@method": MethodEnum.SimpleQ,
    isEnabled: false,
  },
  {
    id: 14,
    "@phase": PhaseEnum.Summer,
    "@method": MethodEnum.OpenQNoOvg,
    isEnabled: false,
  },
  {
    id: 15,
    "@phase": PhaseEnum.Summer,
    "@method": MethodEnum.OpenQWithOvg,
    isEnabled: true,
  },
  {
    id: 16,
    "@phase": PhaseEnum.Summer,
    "@method": MethodEnum.TransitionQByAlpha,
    isEnabled: true,
  },
  {
    id: 17,
    "@phase": PhaseEnum.Summer,
    "@method": MethodEnum.TransitionQBySum,
    isEnabled: true,
  },
  {
    id: 18,
    "@phase": PhaseEnum.Overgrowing,
    "@method": MethodEnum.QurveQ,
    isEnabled: false,
  },
  {
    id: 19,
    "@phase": PhaseEnum.Overgrowing,
    "@method": MethodEnum.SimpleQ,
    isEnabled: false,
  },
  {
    id: 20,
    "@phase": PhaseEnum.Overgrowing,
    "@method": MethodEnum.OpenQNoOvg,
    isEnabled: false,
  },
  {
    id: 21,
    "@phase": PhaseEnum.Overgrowing,
    "@method": MethodEnum.OpenQWithOvg,
    isEnabled: false,
  },
  {
    id: 22,
    "@phase": PhaseEnum.Overgrowing,
    "@method": MethodEnum.TransitionQByAlpha,
    isEnabled: true,
  },
  {
    id: 23,
    "@phase": PhaseEnum.Overgrowing,
    "@method": MethodEnum.TransitionQBySum,
    isEnabled: true,
  },
  {
    id: 24,
    "@phase": PhaseEnum.Autumn,
    "@method": MethodEnum.QurveQ,
    isEnabled: false,
  },
  {
    id: 25,
    "@phase": PhaseEnum.Autumn,
    "@method": MethodEnum.SimpleQ,
    isEnabled: false,
  },
  {
    id: 26,
    "@phase": PhaseEnum.Autumn,
    "@method": MethodEnum.OpenQNoOvg,
    isEnabled: true,
  },
  {
    id: 27,
    "@phase": PhaseEnum.Autumn,
    "@method": MethodEnum.OpenQWithOvg,
    isEnabled: true,
  },
  {
    id: 28,
    "@phase": PhaseEnum.Autumn,
    "@method": MethodEnum.TransitionQByAlpha,
    isEnabled: false,
  },
  {
    id: 29,
    "@phase": PhaseEnum.Autumn,
    "@method": MethodEnum.TransitionQBySum,
    isEnabled: false,
  },
  {
    id: 30,
    "@phase": PhaseEnum.Unknown,
    "@method": MethodEnum.QurveQ,
    isEnabled: false,
  },
  {
    id: 31,
    "@phase": PhaseEnum.Unknown,
    "@method": MethodEnum.SimpleQ,
    isEnabled: false,
  },
  {
    id: 32,
    "@phase": PhaseEnum.Unknown,
    "@method": MethodEnum.OpenQNoOvg,
    isEnabled: false,
  },
  {
    id: 33,
    "@phase": PhaseEnum.Unknown,
    "@method": MethodEnum.OpenQWithOvg,
    isEnabled: false,
  },
  {
    id: 34,
    "@phase": PhaseEnum.Unknown,
    "@method": MethodEnum.TransitionQByAlpha,
    isEnabled: false,
  },
  {
    id: 35,
    "@phase": PhaseEnum.Unknown,
    "@method": MethodEnum.TransitionQBySum,
    isEnabled: false,
  },
];
