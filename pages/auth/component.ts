import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME, VLogoParams } from "./constants";

import VLogo from "~/components/vLogo/component/component";
import AuthForm from "./components/form/component";

import { VLogoParamsInterface } from "~/shared/components/vLogo/factory";
import {
  StatusFactory,
  StatusIdEnum,
  StatusInterface,
  StatusTypeEnum,
} from "~/shared/entities/status/factory";

@Component({
  name: COMPONENT_NAME,
  components: {
    VLogo,
    AuthForm,
  },
})
export default class Auth extends Vue {
  readonly VLogoParams: VLogoParamsInterface = VLogoParams;

  public status: StatusInterface = StatusFactory();

  onChangeStatusLoading(id: string) {
    this.status.id = id;
    this.status.type = StatusTypeEnum.loading;
  }

  onChangeStatusDefault() {
    this.status.id = StatusIdEnum.default;
    this.status.type = StatusTypeEnum.default;
  }
}
