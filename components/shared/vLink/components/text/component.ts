import { Component, Prop, Vue } from "nuxt-property-decorator";

import {
  VLinkParamsInterface,
  VLinkParamsStyleEnum,
} from "~/shared/components/vLink/factory";

import { COMPONENT_NAME, ViewStyleClassEnum } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VLinkText extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VLinkParamsInterface;

  get getViewStyleClass(): ViewStyleClassEnum {
    switch (this.params.style) {
      case VLinkParamsStyleEnum.primary:
        return ViewStyleClassEnum.primary;
      default:
        return ViewStyleClassEnum.default;
    }
  }
}
