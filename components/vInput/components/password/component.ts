import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  VInputEventEnum,
  VInputParamsInterface,
} from "~/shared/components/vInput/factory";

import { ButtonIconEnum, COMPONENT_NAME, InputTypeEnum } from "./constants";

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

  public inputType: InputTypeEnum = InputTypeEnum.password;

  get getButtonIcon(): ButtonIconEnum {
    switch (this.inputType) {
      case InputTypeEnum.password:
        return ButtonIconEnum.hide;
      case InputTypeEnum.text:
        return ButtonIconEnum.show;
      default:
        return ButtonIconEnum.hide;
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
      case InputTypeEnum.password:
        this.inputType = InputTypeEnum.text;
        break;
      case InputTypeEnum.text:
        this.inputType = InputTypeEnum.password;
        break;
      default:
        break;
    }
  }
}
