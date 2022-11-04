import { Component, Prop, Vue } from "nuxt-property-decorator";

import VInput from "~/components/shared/vInput/component/component";
import VLabel from "~/components/shared/vLabel/component/component";
import VButton from "~/components/shared/vButton/component/component";

import { VInputParamsInterface } from "~/shared/components/vInput/factory";
import { VLabelParamsInterface } from "~/shared/components/vLabel/factory";
import { VButtonParamsInterface } from "~/shared/components/vButton/factory";
import { AuthInterface } from "~/shared/entities/connect/factory";
import {
  StatusEventEnum,
  StatusIdEnum,
  StatusInterface,
} from "~/shared/entities/status/factory";

import {
  COMPONENT_NAME,
  VButtonParams,
  VInputParamsLogin,
  VInputParamsPassword,
  VLabelParamsLogin,
  VLabelParamsPassword,
} from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VInput,
    VLabel,
    VButton,
  },
})
export default class AuthForm extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly status: StatusInterface;

  readonly projectReposity = this.$projectServices.projectRepository;

  readonly VInputParamsLogin: VInputParamsInterface = VInputParamsLogin;
  readonly VInputParamsPassword: VInputParamsInterface = VInputParamsPassword;

  readonly VLabelParamsLogin: VLabelParamsInterface = VLabelParamsLogin;
  readonly VLabelParamsPassword: VLabelParamsInterface = VLabelParamsPassword;

  readonly VButtonParams: VButtonParamsInterface = VButtonParams;

  public user: AuthInterface = {
    login: "softline",
    password: "P@ssw0rd911xyz",
  };

  onChangeUserLogin(value: string): void {
    this.user.login = value;
  }

  onChangeUserPassword(value: string): void {
    this.user.password = value;
  }

  async onAuth() {
    try {
      this.$emit(StatusEventEnum.loading, StatusIdEnum.authButton);
      await this.projectReposity.token(this.user).then((res) => {
        this.$cookies.set("access_token", res.access_token);
        this.$emit(StatusEventEnum.default);
      });
    } catch (e) {
      this.$emit(StatusEventEnum.default);
    }
  }
}
