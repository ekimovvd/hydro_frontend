import { Component, Prop, Vue } from "nuxt-property-decorator";
import { VButtonIconEnum } from "~/shared/components/vButton/factory";

import {
  VInputEventEnum,
  VInputParamsInterface,
  VInputTypeEnum,
} from "~/shared/components/vInput/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VInputPassword extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VInputParamsInterface;
  @Prop({
    type: String,
    required: true,
  })
  readonly value: string;

  public inputType: VInputTypeEnum = VInputTypeEnum.password;

  get getButtonIcon(): VButtonIconEnum {
    switch (this.inputType) {
      case VInputTypeEnum.password:
        return VButtonIconEnum.hide;
      case VInputTypeEnum.text:
        return VButtonIconEnum.show;
      default:
        return VButtonIconEnum.hide;
    }
  }

  get currentValue(): string {
    return this.value;
  }

  set currentValue(value: string) {
    this.$emit(VInputEventEnum.change, value);
  }

  onChangeVisible(): void {
    switch (this.inputType) {
      case VInputTypeEnum.password:
        this.inputType = VInputTypeEnum.text;
        break;
      case VInputTypeEnum.text:
        this.inputType = VInputTypeEnum.password;
        break;
      default:
        break;
    }
  }
}
