import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  VInputEventEnum,
  VInputParamsInterface,
} from "~/shared/components/vInput/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VInputNumber extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VInputParamsInterface;
  @Prop({
    type: Number,
    required: true,
  })
  readonly value: number;

  get currentValue(): number {
    return this.value;
  }

  set currentValue(value: number) {
    this.$emit(VInputEventEnum.change, value);
  }
}
