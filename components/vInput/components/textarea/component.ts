import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  VInputParamsInterface,
  VInputEventEnum,
} from "~/shared/components/vInput/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VInputTextarea extends Vue {
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

  get currentValue(): string {
    return this.value;
  }

  set currentValue(value: string) {
    this.$emit(VInputEventEnum.change, value);
  }
}
