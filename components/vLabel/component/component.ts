import { Component, Prop, Vue } from "nuxt-property-decorator";

import { VLabelParamsInterface } from "~/shared/components/vLabel/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VLabel extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VLabelParamsInterface;
}
