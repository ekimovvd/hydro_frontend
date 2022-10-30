import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME, VLogoParams } from "./constants";

import VLogo from "~/components/vLogo/component/component";
import AuthForm from "./components/form/component";

import { VLogoParamsInterface } from "~/shared/components/vLogo/factory";

@Component({
  name: COMPONENT_NAME,
  components: {
    VLogo,
    AuthForm,
  },
})
export default class Auth extends Vue {
  readonly VLogoParams: VLogoParamsInterface = VLogoParams;
}
