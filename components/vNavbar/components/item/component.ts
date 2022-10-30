import { Component, Prop, Vue } from "nuxt-property-decorator";

import VLink from "~/components/vLink/component/component";

import { VLinkParamsInterface } from "~/shared/components/vLink/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VLink,
  },
})
export default class VNavbarItem extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly item: VLinkParamsInterface;
}
