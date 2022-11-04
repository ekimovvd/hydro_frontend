export interface VPopconfirmParamsInterface {
  id: string;
  title: VPopconfirmParamsTitleEnum;
  confirmButtonText: VPopconfirmParamsButtonTextEnum;
  cancelButtonText: VPopconfirmParamsButtonTextEnum;
  label: VPopconfirmParamsLabelEnum;
}

export enum VPopconfirmParamsTitleEnum {
  delete = "Вы действительно хотите удалить?",
  deletePost = "Вы действительно хотите удалить пост?",
}

export enum VPopconfirmParamsLabelEnum {
  delete = "Удалить",
  loading = "Загрузка...",
}

export enum VPopconfirmParamsButtonTextEnum {
  cancel = "Отмена",
  delete = "Удалить",
}

export enum VPopconfirmEventEnum {
  confirm = "confirm",
  cancel = "cancel",
}

export const VPopconfirmParamsFactory = (
  params: Partial<VPopconfirmParamsInterface> = {}
): VPopconfirmParamsInterface => {
  return {
    id: "",
    title: VPopconfirmParamsTitleEnum.delete,
    confirmButtonText: VPopconfirmParamsButtonTextEnum.delete,
    cancelButtonText: VPopconfirmParamsButtonTextEnum.cancel,
    label: VPopconfirmParamsLabelEnum.delete,
    ...params,
  };
};
