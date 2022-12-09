import { Component, Prop, Vue } from "nuxt-property-decorator";

import { VPickerParamsInterface } from "~/shared/components/vPicker/factory";

import { COMPONENT_NAME } from "./constants";
import { EventEnum } from "../../component/constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VPickerDate extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VPickerParamsInterface;
  @Prop({
    type: [String, Array],
    required: true,
  })
  readonly value: string | Array<string>;

  get currentValue(): string | Array<string> {
    return this.value;
  }

  set currentValue(value: string | Array<string>) {
    this.$emit(EventEnum.change, value);
  }
}
