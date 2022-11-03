import { Component, Vue, Prop } from "nuxt-property-decorator";

import { VInputParamsInterface } from "~/shared/components/vInput/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VInputRadio extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VInputParamsInterface;
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly value: string;
}
