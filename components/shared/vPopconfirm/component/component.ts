import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VPopconfirmEventEnum,
  VPopconfirmParamsInterface,
} from "~/shared/components/vPopconfirm/factory";

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

  @Emit(VPopconfirmEventEnum.confirm)
  onConfirm(): void {}

  @Emit(VPopconfirmEventEnum.cancel)
  onCancel(): void {}
}
