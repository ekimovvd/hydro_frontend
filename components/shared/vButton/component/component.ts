import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VButtonEventEnum,
  VButtonParamsInterface,
  VButtonParamsTypeEnum,
} from "~/shared/components/vButton/factory";
import { StatusInterface } from "~/shared/entities/status/factory";
import { VButtonFullViewClassEnum } from "../components/text/constants";

import VButtonText from "../components/text/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    "text-component": VButtonText,
  },
})
export default class VButton extends Vue {
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

  get getComponent(): VButtonParamsTypeEnum {
    return this.params.type;
  }

  get getFullViewClass(): VButtonFullViewClassEnum {
    switch (this.params.full) {
      case true:
        return VButtonFullViewClassEnum.full;
      default:
        return VButtonFullViewClassEnum.default;
    }
  }

  @Emit(VButtonEventEnum.click)
  onClick(): void {}
}
