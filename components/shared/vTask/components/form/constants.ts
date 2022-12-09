import {
  VButtonParamsFactory,
  VButtonParamsLabelEnum,
} from "~/shared/components/vButton/factory";
import {
  VInputParamsFactory,
  VInputParamsInterface,
  VInputParamsPlaceholderEnum,
  VInputParamsTextEnum,
  VInputParamsTypeEnum,
} from "~/shared/components/vInput/factory";
import {
  VLabelParamsFactory,
  VLabelParamsInterface,
  VLabelParamsTextEnum,
} from "~/shared/components/vLabel/factory";
import {
  VPickerParamsComponentEnum,
  VPickerParamsFactory,
  VPickerParamsFormatEnum,
  VPickerParamsPlaceholderEnum,
  VPickerParamsTypeEnum,
} from "~/shared/components/vPicker/factory";
import {
  VSelectDataFactory,
  VSelectDataInterface,
  VSelectParamsFactory,
  VSelectParamsInterface,
  VSelectParamsPlaceholderEnum,
} from "~/shared/components/vSelect/factory";
import { StatusIdEnum } from "~/shared/entities/status/factory";
import {
  CalculationPeriodEnum,
  CalculationPeriodValueEnum,
  ModeEnum,
  ModeValueEnum,
  StatusEnum,
  StatusValue,
  TaskTypeIDEnum,
  TaskTypeIDValue,
} from "~/shared/entities/tasks/factory";

export const COMPONENT_NAME = "v-task-form";

export const VSelectParamsStation: VSelectParamsInterface =
  VSelectParamsFactory({
    placeholder: VSelectParamsPlaceholderEnum.station,
  });
export const VSelectParamsTaskType: VSelectParamsInterface =
  VSelectParamsFactory({
    placeholder: VSelectParamsPlaceholderEnum.taskType,
  });
export const VSelectParamsStatus: VSelectParamsInterface = VSelectParamsFactory(
  {
    placeholder: VSelectParamsPlaceholderEnum.status,
  }
);
export const VSelectParamsMode: VSelectParamsInterface = VSelectParamsFactory({
  placeholder: VSelectParamsPlaceholderEnum.mode,
});
export const VSelectParamsCalculationPeriod: VSelectParamsInterface =
  VSelectParamsFactory({
    placeholder: VSelectParamsPlaceholderEnum.calculationPeriod,
  });

export const VSelectDataTaskType: VSelectDataInterface[] = [
  VSelectDataFactory({
    label: TaskTypeIDValue.Acf,
    value: TaskTypeIDEnum.Acf,
  }),
  VSelectDataFactory({
    label: TaskTypeIDValue.Phases,
    value: TaskTypeIDEnum.Phases,
  }),
  VSelectDataFactory({
    label: TaskTypeIDValue.CurveQ,
    value: TaskTypeIDEnum.CurveQ,
  }),
  VSelectDataFactory({
    label: TaskTypeIDValue.AutoQ,
    value: TaskTypeIDEnum.AutoQ,
  }),
  VSelectDataFactory({
    label: TaskTypeIDValue.TempSum,
    value: TaskTypeIDEnum.TempSum,
  }),
  VSelectDataFactory({
    label: TaskTypeIDValue.ReservoirSingle,
    value: TaskTypeIDEnum.ReservoirSingle,
  }),
  VSelectDataFactory({
    label: TaskTypeIDValue.ReservoirPeriod,
    value: TaskTypeIDEnum.ReservoirPeriod,
  }),
  VSelectDataFactory({
    label: TaskTypeIDValue.TransitionPoints,
    value: TaskTypeIDEnum.TransitionPoints,
  }),
];
export const VSelectDataStatus: VSelectDataInterface[] = [
  VSelectDataFactory({
    label: StatusValue["-2"],
    value: StatusEnum.error,
  }),
  VSelectDataFactory({
    label: StatusValue["-1"],
    value: StatusEnum.autoStopped,
  }),
  VSelectDataFactory({
    label: StatusValue["0"],
    value: StatusEnum.stopped,
  }),
  VSelectDataFactory({
    label: StatusValue["1"],
    value: StatusEnum.active,
  }),
  VSelectDataFactory({
    label: StatusValue["2"],
    value: StatusEnum.runItOnce,
  }),
];
export const VSelectDataMode: VSelectDataInterface[] = [
  VSelectDataFactory({
    label: ModeValueEnum.FromLastRun,
    value: ModeEnum.FromLastRun,
  }),
  VSelectDataFactory({
    label: ModeValueEnum.OncePerCall,
    value: ModeEnum.OncePerCall,
  }),
];
export const VSelectDataCalculationPeriod: VSelectDataInterface[] = [
  VSelectDataFactory({
    label: CalculationPeriodValueEnum.relative,
    value: CalculationPeriodEnum.relative,
  }),
  VSelectDataFactory({
    label: CalculationPeriodValueEnum.fixed,
    value: CalculationPeriodEnum.fixed,
  }),
];

export const VLabelParamsStation: VLabelParamsInterface = VLabelParamsFactory({
  text: VLabelParamsTextEnum.station,
});
export const VLabelParamsTaskType: VLabelParamsInterface = VLabelParamsFactory({
  text: VLabelParamsTextEnum.taskType,
});
export const VLabelParamsStatus: VLabelParamsInterface = VLabelParamsFactory({
  text: VLabelParamsTextEnum.status,
});
export const VLabelParamsMode: VLabelParamsInterface = VLabelParamsFactory({
  text: VLabelParamsTextEnum.mode,
});
export const VLabelParamsCalculationPeriod: VLabelParamsInterface =
  VLabelParamsFactory({ text: VLabelParamsTextEnum.calculationPeriod });
export const VLabelParamsIntervalDays: VLabelParamsInterface =
  VLabelParamsFactory({
    text: VLabelParamsTextEnum.intervalDays,
  });
export const VLabelParamsIntervalTime: VLabelParamsInterface =
  VLabelParamsFactory({
    text: VLabelParamsTextEnum.intervalTime,
  });
export const VLabelParamsPeriod: VLabelParamsInterface = VLabelParamsFactory({
  text: VLabelParamsTextEnum.period,
});
export const VLabelParamsPeriodExt: VLabelParamsInterface = VLabelParamsFactory(
  {
    text: VLabelParamsTextEnum.periodExt,
  }
);
export const VLabelParamsCalcStepDays: VLabelParamsInterface =
  VLabelParamsFactory({
    text: VLabelParamsTextEnum.calcStepDays,
  });
export const VLabelParamsScheduledTime: VLabelParamsInterface =
  VLabelParamsFactory({
    text: VLabelParamsTextEnum.scheduledTime,
  });
export const VLabelParamsCalculationPeriodRelative: VLabelParamsInterface =
  VLabelParamsFactory({
    text: VLabelParamsTextEnum.calculationPeriodRelative,
  });
export const VLabelParamsCalculationPeriodFixed: VLabelParamsInterface =
  VLabelParamsFactory({
    text: VLabelParamsTextEnum.calculationPeriodFixed,
  });

export const VInputParamsSkipErrors: VInputParamsInterface =
  VInputParamsFactory({
    type: VInputParamsTypeEnum.checkbox,
    text: VInputParamsTextEnum.skipErrors,
  });
export const VInputParamsInterval = VInputParamsFactory({
  type: VInputParamsTypeEnum.number,
  placeholder: VInputParamsPlaceholderEnum.intervalDays,
});
export const VInputParamsPeriod = VInputParamsFactory({
  type: VInputParamsTypeEnum.number,
});
export const VInputParamsPeriodExt = VInputParamsFactory({
  type: VInputParamsTypeEnum.number,
});
export const VInputParamsCalcStepDays = VInputParamsFactory({
  type: VInputParamsTypeEnum.number,
});
export const VInputParamsCorrQ: VInputParamsInterface = VInputParamsFactory({
  type: VInputParamsTypeEnum.checkbox,
  text: VInputParamsTextEnum.corrQ,
});

export const VButtonParamsCreate = VButtonParamsFactory({
  id: StatusIdEnum.tasksFormButtonCreate,
  label: VButtonParamsLabelEnum.create,
});
export const VButtonParamsSave = VButtonParamsFactory({
  id: StatusIdEnum.tasksFormButtonSave,
  label: VButtonParamsLabelEnum.save,
});
export const VButtonParamsDelete = VButtonParamsFactory({
  id: StatusIdEnum.tasksFormButtonDelete,
  label: VButtonParamsLabelEnum.delete,
});

export const VPickerParamsScheduledTime = VPickerParamsFactory({
  type: VPickerParamsTypeEnum.dateTime,
  format: VPickerParamsFormatEnum.dateTime,
  placeholder: VPickerParamsPlaceholderEnum.scheduledTime,
});
export const VPickerParamsIntervalTime = VPickerParamsFactory({
  component: VPickerParamsComponentEnum.time,
  type: VPickerParamsTypeEnum.time,
  format: VPickerParamsFormatEnum.time,
  placeholder: VPickerParamsPlaceholderEnum.intervalTime,
});
export const VPickerParamsCalculationPeriodRelative = VPickerParamsFactory({
  component: VPickerParamsComponentEnum.date,
  type: VPickerParamsTypeEnum.dateTimeRange,
  format: VPickerParamsFormatEnum.dateTimeRelative,
  placeholder: VPickerParamsPlaceholderEnum.calculationPeriodRelative,
});
export const VPickerParamsCalculationPeriodFixed = VPickerParamsFactory({
  component: VPickerParamsComponentEnum.date,
  type: VPickerParamsTypeEnum.dateTimeRange,
  format: VPickerParamsFormatEnum.dateTimeFixed,
  placeholder: VPickerParamsPlaceholderEnum.calculationPeriodFixed,
});
