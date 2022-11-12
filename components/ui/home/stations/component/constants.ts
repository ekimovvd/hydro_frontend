import {
  NotificationCustomClassEnum,
  NotificationFactory,
  NotificationInterface,
  NotificationTypeEnum,
} from "~/shared/entities/notification/factory";

export const COMPONENT_NAME = "home-stations";

export enum EventEnum {
  stationUpdate = "station:update",
  stationClear = "station:clear",
  stationDelete = "station:delete",
}

export const NotificationDeleteStationSuccess: NotificationInterface =
  NotificationFactory({
    message: "Станция успешно удалена!",
  });
export const NotificationDeleteStationError: NotificationInterface =
  NotificationFactory({
    message: "Станция не удалена!",
    type: NotificationTypeEnum.error,
    customClass: NotificationCustomClassEnum.error,
  });
