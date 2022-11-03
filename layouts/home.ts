import { Component, Vue } from "nuxt-property-decorator";

import VHeader from "~/components/shared/vHeader/component/component";
import VNavbar from "~/components/shared/vNavbar/component/component";

@Component({
  name: "home",
  components: {
    VHeader,
    VNavbar,
  },
})
export default class Home extends Vue {}
