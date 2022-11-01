import {
  VButtonParamsFactory,
  VButtonParamsLabelEnum,
} from "~/shared/components/vButton/factory";
import {
  VInputParamsFactory,
  VInputParamsIdEnum,
  VInputParamsPlaceholderEnum,
  VInputParamsTypeEnum,
} from "~/shared/components/vInput/factory";
import {
  VLabelParamsFactory,
  VLabelParamsForEnum,
  VLabelParamsTextEnum,
} from "~/shared/components/vLabel/factory";

export const COMPONENT_NAME = "auth-form";

export enum ButtonIdEnum {
  auth = "auth-button",
}

export const VInputParamsLogin = VInputParamsFactory({
  type: VInputParamsTypeEnum.text,
  placeholder: VInputParamsPlaceholderEnum.login,
  id: VInputParamsIdEnum.authFormLogin,
});
export const VInputParamsPassword = VInputParamsFactory({
  type: VInputParamsTypeEnum.password,
  placeholder: VInputParamsPlaceholderEnum.password,
  id: VInputParamsIdEnum.authFormPassword,
});

export const VLabelParamsLogin = VLabelParamsFactory({
  for: VLabelParamsForEnum.authFormLogin,
  text: VLabelParamsTextEnum.login,
});
export const VLabelParamsPassword = VLabelParamsFactory({
  for: VLabelParamsForEnum.authFormPassword,
  text: VLabelParamsTextEnum.password,
});

export const VButtonParams = VButtonParamsFactory({
  id: ButtonIdEnum.auth,
  label: VButtonParamsLabelEnum.auth,
});
