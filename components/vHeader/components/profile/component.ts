import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME, PROFILE_PATH } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VHeaderProfile extends Vue {
  readonly PROFILE_PATH: string = PROFILE_PATH;

  get getUserRole(): string {
    return "старший гидролог";
  }
}
