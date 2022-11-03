import { Component, Vue } from "nuxt-property-decorator";

import VLogo from "~/components/shared/vLogo/component/component";

import { VLogoParamsInterface } from "~/shared/components/vLogo/factory";

import { COMPONENT_NAME, VLogoParams } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VLogo,
  },
})
export default class VHeaderLogo extends Vue {
  readonly VLogoParams: VLogoParamsInterface = VLogoParams;
}
