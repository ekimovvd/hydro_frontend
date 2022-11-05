import { Component, Vue } from "nuxt-property-decorator";

import VLogo from "~/components/shared/vLogo/component/component";
import AuthForm from "~/components/ui/auth/component/component";

import { VLogoParamsInterface } from "~/shared/components/vLogo/factory";
import {
  StatusFactory,
  StatusIdEnum,
  StatusInterface,
  StatusTypeEnum,
} from "~/shared/entities/status/factory";
import { VLinkParamsNameEnum } from "~/shared/components/vLink/factory";

import { COMPONENT_NAME, VLogoParams } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VLogo,
    AuthForm,
  },
  head() {
    return {
      title: VLinkParamsNameEnum.auth,
    };
  },
})
export default class Auth extends Vue {
  readonly VLogoParams: VLogoParamsInterface = VLogoParams;

  public status: StatusInterface = StatusFactory();

  onChangeStatusLoading(id: string): void {
    this.status.id = id;
    this.status.type = StatusTypeEnum.loading;
  }

  onChangeStatusDefault(): void {
    this.status.id = StatusIdEnum.default;
    this.status.type = StatusTypeEnum.default;
  }
}
