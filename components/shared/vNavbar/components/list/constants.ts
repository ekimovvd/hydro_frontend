import {
  VLinkParamsFactory,
  VLinkParamsIconEnum,
  VLinkParamsInterface,
  VLinkParamsNameEnum,
  VLinkParamsToEnum,
} from "~/shared/components/vLink/factory";

export const COMPONENT_NAME = "v-navbar-list";

export const VLinks: VLinkParamsInterface[] = [
  VLinkParamsFactory({ icon: VLinkParamsIconEnum.home }),
  VLinkParamsFactory({
    to: VLinkParamsToEnum.stations,
    name: VLinkParamsNameEnum.stations,
    icon: VLinkParamsIconEnum.stations,
  }),
  VLinkParamsFactory({
    to: VLinkParamsToEnum.operational,
    name: VLinkParamsNameEnum.operational,
    icon: VLinkParamsIconEnum.operational,
  }),
  VLinkParamsFactory({
    to: VLinkParamsToEnum.methods,
    name: VLinkParamsNameEnum.methods,
    icon: VLinkParamsIconEnum.methods,
  }),
  VLinkParamsFactory({
    to: VLinkParamsToEnum.files,
    name: VLinkParamsNameEnum.files,
    icon: VLinkParamsIconEnum.files,
  }),
];
