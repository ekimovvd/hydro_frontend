import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VButtonEventEnum,
  VButtonParamsInterface,
  VButtonParamsLabelEnum,
  VButtonParamsStyleEnum,
} from "~/shared/components/vButton/factory";
import {
  StatusInterface,
  StatusTypeEnum,
} from "~/shared/entities/status/factory";

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
  @Prop({
    type: Object,
    required: true,
  })
  readonly status: StatusInterface;
  @Prop({
    type: Boolean,
    default: false,
  })
  readonly disabled: boolean;

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

  get getLabel(): VButtonParamsLabelEnum {
    if (
      this.status.type === StatusTypeEnum.loading &&
      this.status.id === this.params.id
    ) {
      return VButtonParamsLabelEnum.loading;
    } else if (
      this.status.type === StatusTypeEnum.loading ||
      this.status.type === StatusTypeEnum.pending
    ) {
      return this.params.label;
    } else if (this.disabled) {
      return this.params.label;
    }
    return this.params.label;
  }

  get getDisabled(): boolean {
    if (
      this.status.type === StatusTypeEnum.loading ||
      this.status.type === StatusTypeEnum.pending ||
      this.disabled
    ) {
      return true;
    }
    return false;
  }

  @Emit(VButtonEventEnum.click)
  onClick(): void {}
}
