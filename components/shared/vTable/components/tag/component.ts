import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  VTableTagInterface,
  VTableStyleEnum,
} from "~/shared/components/vTable/factory";

import {
  COMPONENT_NAME,
  VLabelIconStyleViewClassEnum,
  VTagIconStyleViewClassEnum,
} from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VTableTag extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VTableTagInterface;

  get getLabelIconStyleViewClass(): VLabelIconStyleViewClassEnum {
    switch (this.params.style) {
      case VTableStyleEnum.primary:
        return VLabelIconStyleViewClassEnum.primary;
      default:
        return VLabelIconStyleViewClassEnum.default;
    }
  }

  onTagIconStyleViewClass(value: boolean): VTagIconStyleViewClassEnum {
    return value
      ? VTagIconStyleViewClassEnum.orange
      : VTagIconStyleViewClassEnum.default;
  }
}
