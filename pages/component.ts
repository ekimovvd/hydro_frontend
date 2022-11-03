import { Component, Vue } from "nuxt-property-decorator";

import { VLinkParamsNameEnum } from "~/shared/components/vLink/factory";

import { COMPONENT_NAME, LAYOUT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
  head() {
    return {
      title: VLinkParamsNameEnum.home,
    };
  },
})
export default class Index extends Vue {}
