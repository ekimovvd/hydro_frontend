import {
  NotificationCustomClassEnum,
  NotificationFactory,
  NotificationInterface,
  NotificationTypeEnum,
} from "~/shared/entities/notification/factory";

export const COMPONENT_NAME = "stations-work";

export enum EventEnum {
  formName = "form:name",
  formComment = "form:comment",
  formIsReservoir = "form:is:reservoir",
  formIsFavorite = "form:is:favorite",
  formNearestMeteo = "form:nearest:meteo",
  formClearNearestMeteo = "form:clear:nearest:meteo",
  formAreaCenterMeteo = "form:area:center:meteo",
  formClearAreaCenterMeteo = "form:clear:area:center:meteo",
  station = "station",
  stationClear = "station:clear",
  stationRemove = "station:remove",
  stationSave = "station:save",
}

export const NotificationUpdateStationSuccess: NotificationInterface =
  NotificationFactory({
    message: "Станция успешно обновлена!",
  });
export const NotificationUpdateStationError: NotificationInterface =
  NotificationFactory({
    message: "Станция не обновлена!",
    type: NotificationTypeEnum.error,
    customClass: NotificationCustomClassEnum.error,
  });

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
