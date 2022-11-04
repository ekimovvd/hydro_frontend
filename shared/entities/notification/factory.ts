export interface NotificationInterface {
  title: string;
  message: string;
  type: NotificationTypeEnum;
  duration: number;
  showClose: boolean;
  customClass: NotificationCustomClassEnum;
}

export enum NotificationTypeEnum {
  success = "success",
  error = "error",
}

export enum NotificationCustomClassEnum {
  success = "el-notification--view-success",
  error = "el-notification--view-error",
}

export const NotificationFactory = (
  params: Partial<NotificationInterface> = {}
): NotificationInterface => {
  return {
    title: "",
    message: "",
    type: NotificationTypeEnum.success,
    duration: 3500,
    showClose: false,
    customClass: NotificationCustomClassEnum.success,
    ...params,
  };
};
