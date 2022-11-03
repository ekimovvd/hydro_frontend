import { Component, Vue } from "nuxt-property-decorator";

import { VLinkParamsToEnum } from "~/shared/components/vLink/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VHeaderProfile extends Vue {
  readonly PROFILE_PATH: VLinkParamsToEnum = VLinkParamsToEnum.profile;

  get getUserRole(): string {
    return "старший гидролог";
  }
}
