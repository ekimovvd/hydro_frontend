import { Component, Vue } from "nuxt-property-decorator";

import VHeader from "~/components/vHeader/component/component";
import VNavbar from "~/components/vNavbar/component/component";

@Component({
  name: "home",
  components: {
    VHeader,
    VNavbar,
  },
})
export default class Home extends Vue {}
