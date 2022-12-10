import {
  NotificationCustomClassEnum,
  NotificationFactory,
  NotificationInterface,
  NotificationTypeEnum,
} from "~/shared/entities/notification/factory";

export const COMPONENT_NAME = "v-task";

export enum EventEnum {
  task = "task",
  taskClear = "task:clear",
  stationUpdate = "station:update",
  stationClear = "station:clear",
  taskTypeUpdate = "task:type:update",
  taskTypeClear = "task:type:clear",
  statusUpdate = "status:update",
  statusClear = "status:clear",
  skipErrorsUpdate = "skip:errors:update",
  modeUpdate = "mode:update",
  modeClear = "mode:clear",
  calculationPeriodUpdate = "calculation:period:update",
  calculationPeriodClear = "calculation:period:clear",
  calculationPeriodRelativeUpdate = "calculation:period:relative:update",
  calculationPeriodFixedUpdate = "calculation:period:fixed:update",
  taskCreate = "task:create",
  taskSave = "task:save",
  taskDelete = "task:delete",
  intervalDaysUpdate = "interval:days:update",
  intervalTimeUpdate = "interval:time:update",
  periodUpdate = "period:update",
  periodExtUpdate = "period:ext:update",
  calcStepDaysUpdate = "calc:step:days:update",
  corrQUpdate = "corr:q:update",
  scheduledTimeUpdate = "scheduled:time:update",
  phaseUpdate = "phase:update",
  serverTasksUpdate = "server:tasks:update",
}

export const NotificationSaveServerTaskSuccess: NotificationInterface =
  NotificationFactory({
    message: "Задача успешно сохранена!",
  });
export const NotificationSaveServerTaskError: NotificationInterface =
  NotificationFactory({
    message: "Задача не сохранена!",
    type: NotificationTypeEnum.error,
    customClass: NotificationCustomClassEnum.error,
  });

export const NotificationCreateServerTaskSuccess: NotificationInterface =
  NotificationFactory({
    message: "Задача успешно создана!",
  });
export const NotificationCreateServerTaskError: NotificationInterface =
  NotificationFactory({
    message: "Задача не создана!",
    type: NotificationTypeEnum.error,
    customClass: NotificationCustomClassEnum.error,
  });

export const NotificationDeleteServerTaskSuccess: NotificationInterface =
  NotificationFactory({
    message: "Задача успешно удалена!",
  });
export const NotificationDeleteServerTaskError: NotificationInterface =
  NotificationFactory({
    message: "Задача не удалена!",
    type: NotificationTypeEnum.error,
    customClass: NotificationCustomClassEnum.error,
  });
