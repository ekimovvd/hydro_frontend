import { Component, Vue } from "nuxt-property-decorator";

import { VLinkParamsInterface } from "~/shared/components/vLink/factory";

import VNavbarItem from "../item/component";

import { COMPONENT_NAME, VLinks } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VNavbarItem,
  },
})
export default class VNavbarList extends Vue {
  readonly VLinks: VLinkParamsInterface[] = VLinks;
}
