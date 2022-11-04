import { Component, Prop, Vue } from "nuxt-property-decorator";

import { VTableSelectionInterface } from "~/shared/components/vTable/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VTableSelection extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VTableSelectionInterface;
}
