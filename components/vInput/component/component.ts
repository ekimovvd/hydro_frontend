import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VInputParamsInterface,
  VInputParamsTypeEnum,
} from "~/shared/components/vInput/factory";

import VInputText from "../components/text/component";
import VInputPassword from "../components/password/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    "text-component": VInputText,
    "password-component": VInputPassword,
  },
})
export default class VInput extends Vue {
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

  get getComponent(): VInputParamsTypeEnum {
    return this.params.type;
  }

  @Emit("changeValue")
  onChangeValue(value: string): void {}
}
