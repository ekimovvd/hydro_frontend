import { VTableColumnFactory, VTableColumnInterface, VTableColumnLabelEnum, VTableParamsFactory, VTableParamsInterface } from "~/shared/components/vTable/factory";

export const COMPONENT_NAME = "methods-transition-periods";

export const VTableParams: VTableParamsInterface = VTableParamsFactory({
  currentRow: {
    isEnabled: true,
    rowKey: 'pointID'
  }
});

export const VTableColumns: VTableColumnInterface[] = [
  VTableColumnFactory({
    prop: 'pointID',
    label: VTableColumnLabelEnum.on,
  }),
  VTableColumnFactory({
    prop: 'obsTime',
    label: VTableColumnLabelEnum.date,
  }),
  VTableColumnFactory({
    prop: 'pointType',
    label: VTableColumnLabelEnum.pointType,
  }),
  VTableColumnFactory({
    prop: 'devQ',
    label: VTableColumnLabelEnum.devQ,
  }),
  VTableColumnFactory({
    prop: 'sumT',
    label: VTableColumnLabelEnum.sumT,
  }),
  VTableColumnFactory({
    prop: 'curveQ',
    label: VTableColumnLabelEnum.curveQ,
  })
];

export const VPhases: VValueInterface[] = [
  {
    name: "Неизвестно",
    value: 0,
  },
  {
    name: "Весенний период",
    value: 1,
  },
  {
    name: "Открытое русло",
    value: 2,
  },
  {
    name: "Зарастание",
    value: 3,
  },
  {
    name: "Осенний период",
    value: 4,
  },
  {
    name: "Ледостав",
    value: 5,
  },
];

export const VMonths: VValueInterface[] = [
  {
    name: "Янв",
    value: "1",
  },
  {
    name: "Фев",
    value: "2",
  },
  {
    name: "Мар",
    value: "3",
  },
  {
    name: "Апр",
    value: "4",
  },
  {
    name: "Май",
    value: "5",
  },
  {
    name: "Июнь",
    value: "6",
  },
  {
    name: "Июль",
    value: "7",
  },
  {
    name: "Авг",
    value: "8",
  },
  {
    name: "Сен",
    value: "9",
  },
  {
    name: "Окт",
    value: "10",
  },
  {
    name: "Ноя",
    value: "11",
  },
  {
    name: "Дек",
    value: "12",
  },
];

export const VRecType: VValueInterface[] = [
  {
    name: "Автоматически",
    value: 1,
  },
  {
    name: "Вручную",
    value: 2,
  },
];

export interface VValueInterface {
  name: string;
  value: string | number;
}
