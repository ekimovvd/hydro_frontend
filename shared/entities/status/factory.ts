export interface StatusInterface {
  id: string;
  type: StatusTypeEnum;
}

export enum StatusTypeEnum {
  default = "default",
  loading = "loading",
  pending = "pending",
}

export enum StatusEventEnum {
  default = "change:status:default",
  loading = "change:status:loading",
  pending = "change:status:pending",
}

export enum StatusIdEnum {
  default = "",
  authButton = "auth-button",
  stationsTableButtonAdd = "stations-table-button-add",
  stationsWorkFormButtonSave = "stations-work-form-button-save",
  stationsWorkFormButtonDelete = "stations-work-form-button-delete",
  homeStationsTableButtonPairing = "home-stations-table-button-pairing",
  homeStationsTableButtonDelete = "home-stations-table-button-delete",
  tasksFormButtonCreate = "tasks-form-button-create",
  tasksFormButtonSave = "tasks-form-button-save",
  tasksFormButtonDelete = "tasks-form-button-delete",
}

export const StatusFactory = (
  params: Partial<StatusInterface> = {}
): StatusInterface => {
  return {
    id: StatusIdEnum.default,
    type: StatusTypeEnum.default,
    ...params,
  };
};
