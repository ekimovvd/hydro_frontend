import {
  VInputParamsFactory,
  VInputParamsIdEnum,
  VInputParamsInterface,
  VInputParamsPlaceholderEnum,
  VInputParamsTextEnum,
  VInputParamsTypeEnum,
} from "~/shared/components/vInput/factory";
import {
  VLabelParamsFactory,
  VLabelParamsForEnum,
  VLabelParamsInterface,
  VLabelParamsTextEnum,
} from "~/shared/components/vLabel/factory";
import {
  VSelectParamsFactory,
  VSelectParamsInterface,
  VSelectParamsPlaceholderEnum,
} from "~/shared/components/vSelect/factory";

export const COMPONENT_NAME = "posts-form";

export const VSelectParamsNearestMeteo: VSelectParamsInterface =
  VSelectParamsFactory({
    placeholder: VSelectParamsPlaceholderEnum.weatherStation1,
  });
export const VLabelParamsNearestMeteo: VLabelParamsInterface =
  VLabelParamsFactory({ text: VLabelParamsTextEnum.nearestMeteo });

export const VSelectParamsAreaCenterMeteo: VSelectParamsInterface =
  VSelectParamsFactory({
    placeholder: VSelectParamsPlaceholderEnum.weatherStation2,
  });
export const VLabelParamsAreaCenterMeteo: VLabelParamsInterface =
  VLabelParamsFactory({ text: VLabelParamsTextEnum.areaCenterMeteo });

export const VInputParamsName: VInputParamsInterface = VInputParamsFactory({
  id: VInputParamsIdEnum.postsFormName,
  placeholder: VInputParamsPlaceholderEnum.postName,
});
export const VLabelParamsName: VLabelParamsInterface = VLabelParamsFactory({
  for: VLabelParamsForEnum.postsFormName,
  text: VLabelParamsTextEnum.postName,
});

export const VInputParamsComment: VInputParamsInterface = VInputParamsFactory({
  id: VInputParamsIdEnum.postsFormComment,
  type: VInputParamsTypeEnum.textarea,
  placeholder: VInputParamsPlaceholderEnum.comment,
});
export const VLabelParamsComment: VLabelParamsInterface = VLabelParamsFactory({
  for: VLabelParamsForEnum.postsFormComment,
  text: VLabelParamsTextEnum.comment,
});

export const VInputParamsIsReservoir: VInputParamsInterface =
  VInputParamsFactory({
    type: VInputParamsTypeEnum.checkbox,
    text: VInputParamsTextEnum.isReservoir,
  });
export const VInputParamsIsFavorite: VInputParamsInterface =
  VInputParamsFactory({
    type: VInputParamsTypeEnum.checkbox,
    text: VInputParamsTextEnum.isFavorite,
  });
