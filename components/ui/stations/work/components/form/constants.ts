import {
  VButtonParamsFactory,
  VButtonParamsInterface,
  VButtonParamsLabelEnum,
} from "~/shared/components/vButton/factory";
import {
  VInputParamsFactory,
  VInputParamsIdEnum,
  VInputParamsInterface,
  VInputParamsPlaceholderEnum,
  VInputParamsTextEnum,
  VInputParamsTypeEnum,
  VInputTypeEnum,
} from "~/shared/components/vInput/factory";
import {
  VLabelParamsFactory,
  VLabelParamsForEnum,
  VLabelParamsInterface,
  VLabelParamsTextEnum,
} from "~/shared/components/vLabel/factory";
import {
  VPopconfirmParamsFactory,
  VPopconfirmParamsInterface,
  VPopconfirmParamsTitleEnum,
} from "~/shared/components/vPopconfirm/factory";
import {
  VSelectParamsFactory,
  VSelectParamsInterface,
  VSelectParamsPlaceholderEnum,
} from "~/shared/components/vSelect/factory";

export const COMPONENT_NAME = "stations-work-form";

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
  id: VInputParamsIdEnum.stationsFormName,
  placeholder: VInputParamsPlaceholderEnum.postName,
});
export const VLabelParamsName: VLabelParamsInterface = VLabelParamsFactory({
  for: VLabelParamsForEnum.stationsFormName,
  text: VLabelParamsTextEnum.postName,
});

export const VInputParamsComment: VInputParamsInterface = VInputParamsFactory({
  id: VInputParamsIdEnum.stationsFormComment,
  type: VInputParamsTypeEnum.textarea,
  inputType: VInputTypeEnum.textarea,
  placeholder: VInputParamsPlaceholderEnum.comment,
});
export const VLabelParamsComment: VLabelParamsInterface = VLabelParamsFactory({
  for: VLabelParamsForEnum.stationsFormComment,
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

export const VPopconfirmParamsDelete: VPopconfirmParamsInterface =
  VPopconfirmParamsFactory({ title: VPopconfirmParamsTitleEnum.deletePost });

export const VButtonParamsSave: VButtonParamsInterface = VButtonParamsFactory({
  id: "",
  label: VButtonParamsLabelEnum.save,
});
