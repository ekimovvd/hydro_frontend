import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VButtonEventEnum,
  VButtonParamsInterface,
  VButtonParamsTypeEnum,
} from "~/shared/components/vButton/factory";
import { StatusInterface } from "~/shared/entities/status/factory";

import { COMPONENt_NAME } from "./constants";

import VButtonText from "../components/text/component";

@Component({
  name: COMPONENt_NAME,
  components: {
    "text-component": VButtonText,
  },
})
export default class VButton extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VButtonParamsInterface;
  @Prop({
    type: Object,
    required: true,
  })
  readonly status: StatusInterface;

  get getComponent(): VButtonParamsTypeEnum {
    return this.params.type;
  }

  @Emit(VButtonEventEnum.click)
  onClick(): void {}
}
