import { Component, Prop, Vue } from "nuxt-property-decorator";

import { VLinkParamsInterface } from "~/shared/components/vLink/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VLinkIconText extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VLinkParamsInterface;
}
