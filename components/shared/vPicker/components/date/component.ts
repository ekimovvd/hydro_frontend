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
    type: String,
    default: "",
  })
  readonly value: string;

  get currentValue() {
    return this.value;
  }

  set currentValue(value: string) {
    this.$emit(EventEnum.change, value);
  }
}
