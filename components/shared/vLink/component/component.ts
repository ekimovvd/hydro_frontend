import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  VLinkParamsInterface,
  VLinkParamsTypeEnum,
} from "~/shared/components/vLink/factory";

import VLinkIconText from "../components/icon-text/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    "icon-text-component": VLinkIconText,
  },
})
export default class VLink extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VLinkParamsInterface;

  get getComponent(): VLinkParamsTypeEnum {
    return this.params.type;
  }
}
