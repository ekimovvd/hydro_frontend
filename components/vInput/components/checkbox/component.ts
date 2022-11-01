import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  VInputEventEnum,
  VInputParamsInterface,
} from "~/shared/components/vInput/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VInputCheckbox extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VInputParamsInterface;
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly value: boolean;

  get currentValue(): boolean {
    return this.value;
  }

  set currentValue(value: boolean) {
    this.$emit(VInputEventEnum.change, value);
  }
}
