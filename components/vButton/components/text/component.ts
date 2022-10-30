import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VButtonParamsInterface,
  VButtonParamsStyleEnum,
} from "~/shared/components/vButton/factory";

import {
  COMPONENT_NAME,
  VButtonFullViewClassEnum,
  VButtonStyleViewClassEnum,
} from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VButtonText extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VButtonParamsInterface;

  get getStyleViewClass(): VButtonStyleViewClassEnum {
    switch (this.params.style) {
      case VButtonParamsStyleEnum.primary:
        return VButtonStyleViewClassEnum.primary;
      default:
        return VButtonStyleViewClassEnum.default;
    }
  }

  get getFullViewClass(): VButtonFullViewClassEnum {
    switch (this.params.full) {
      case true:
        return VButtonFullViewClassEnum.full;
      default:
        return VButtonFullViewClassEnum.default;
    }
  }

  @Emit("click")
  onClick(): void {}
}
