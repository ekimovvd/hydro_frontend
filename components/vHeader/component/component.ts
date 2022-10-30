import { Component, Vue } from "nuxt-property-decorator";

import VHeaderLogo from "../components/logo/component";
import VHeaderProfile from "../components/profile/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VHeaderLogo,
    VHeaderProfile,
  },
})
export default class VHeader extends Vue {}
