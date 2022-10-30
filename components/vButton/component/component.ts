import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VButtonParamsInterface,
  VButtonParamsTypeEnum,
} from "~/shared/components/vButton/factory";

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

  get getComponent(): VButtonParamsTypeEnum {
    return this.params.type;
  }

  @Emit("click")
  onClick(): void {}
}
