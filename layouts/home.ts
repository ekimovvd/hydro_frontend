import { Component, Vue } from "nuxt-property-decorator";

import VHeader from "~/components/vHeader/component/component";

@Component({
  name: "home",
  components: {
    VHeader,
  },
})
export default class Home extends Vue {}
