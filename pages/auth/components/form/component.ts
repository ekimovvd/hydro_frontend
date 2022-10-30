import { Component, Prop, Vue } from "nuxt-property-decorator";

import { VInputParamsInterface } from "~/shared/components/vInput/factory";
import { VLabelParamsInterface } from "~/shared/components/vLabel/factory";
import { VButtonParamsInterface } from "~/shared/components/vButton/factory";
import { AuthRequestInterface } from "~/shared/pages/auth/factory";
import {
  StatusEventEnum,
  StatusInterface,
} from "~/shared/entities/status/factory";

import {
  ButtonIdEnum,
  COMPONENT_NAME,
  VButtonParams,
  VInputParamsLogin,
  VInputParamsPassword,
  VLabelParamsLogin,
  VLabelParamsPassword,
} from "./constants";

import VInput from "~/components/vInput/component/component";
import VLabel from "~/components/vLabel/component/component";
import VButton from "~/components/vButton/component/component";

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

  public user: AuthRequestInterface = {
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
      this.$emit(StatusEventEnum.loading, ButtonIdEnum.auth);
      await this.projectReposity.auth(this.user).then((res) => {
        console.log(res);
        this.$emit(StatusEventEnum.default);
      });
    } catch (e) {
      this.$emit(StatusEventEnum.default);
    }
  }
}
