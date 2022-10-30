import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME, LAYOUT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
})
export default class Index extends Vue {}
