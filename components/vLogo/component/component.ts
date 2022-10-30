import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  VLogoParamsInterface,
  VLogoParamsTypeEnum,
} from "~/shared/components/vLogo/factory";

import { COMPONENT_NAME } from "./constants";

import VLogoImgText from "../components/img-text/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    "img-text-component": VLogoImgText,
  },
})
export default class VLogo extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VLogoParamsInterface;

  get getComponent(): VLogoParamsTypeEnum {
    return this.params.type;
  }
}
