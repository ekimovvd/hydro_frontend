import {
  VSelectParamsFactory,
  VSelectParamsInterface,
  VSelectParamsPlaceholderEnum,
  VSelectParamsStyleEnum,
} from "~/shared/components/vSelect/factory";

export const COMPONENT_NAME = "home-stations-config";

export const VSelectParamsTerm: VSelectParamsInterface = VSelectParamsFactory({
  style: VSelectParamsStyleEnum.primary,
  placeholder: VSelectParamsPlaceholderEnum.term,
});
