import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VPickerDate from "../components/date/component";
import VPickerTime from "../components/time/component";

import {
  VPickerParamsComponentEnum,
  VPickerParamsInterface,
} from "~/shared/components/vPicker/factory";

import { COMPONENT_NAME, EventEnum } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    "date-component": VPickerDate,
    "time-component": VPickerTime,
  },
})
export default class VPicker extends Vue {
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

  get getComponent(): VPickerParamsComponentEnum {
    return this.params.component;
  }

  @Emit(EventEnum.change)
  onChangeValue(value: string): void {}
}
