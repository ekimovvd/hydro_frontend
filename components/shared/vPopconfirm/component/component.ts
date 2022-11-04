import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VPopconfirmEventEnum,
  VPopconfirmParamsInterface,
  VPopconfirmParamsLabelEnum,
} from "~/shared/components/vPopconfirm/factory";
import {
  StatusInterface,
  StatusTypeEnum,
} from "~/shared/entities/status/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VPopconfirm extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VPopconfirmParamsInterface;
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

  get getLabel(): VPopconfirmParamsLabelEnum {
    if (
      this.status.type === StatusTypeEnum.loading &&
      this.status.id === this.params.id
    ) {
      return VPopconfirmParamsLabelEnum.loading;
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

  @Emit(VPopconfirmEventEnum.confirm)
  onConfirm(): void {}

  @Emit(VPopconfirmEventEnum.cancel)
  onCancel(): void {}
}
