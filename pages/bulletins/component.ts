import { Component, Vue } from "nuxt-property-decorator";

import BulletinsWrapper from "~/components/ui/bulletins/component/component";

import { COMPONENT_NAME, LAYOUT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
  components: {
    BulletinsWrapper,
  },
})
export default class bulletins extends Vue {}
