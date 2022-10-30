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
