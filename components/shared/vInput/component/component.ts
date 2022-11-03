import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VInputEventEnum,
  VInputParamsInterface,
  VInputParamsTypeEnum,
} from "~/shared/components/vInput/factory";

import VInputText from "../components/text/component";
import VInputPassword from "../components/password/component";
import VInputTextarea from "../components/textarea/component";
import VInputCheckbox from "../components/checkbox/component";
import VInputRadio from "../components/radio/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    "text-component": VInputText,
    "password-component": VInputPassword,
    "textarea-component": VInputTextarea,
    "checkbox-component": VInputCheckbox,
    "radio-component": VInputRadio,
  },
})
export default class VInput extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VInputParamsInterface;
  @Prop({
    type: [String, Boolean],
    required: true,
  })
  readonly value: string | boolean;

  get getComponent(): VInputParamsTypeEnum {
    return this.params.type;
  }

  @Emit(VInputEventEnum.change)
  onChangeValue(): void {}
}
