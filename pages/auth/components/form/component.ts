import { Component, Vue } from "nuxt-property-decorator";

import {
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

import { VInputParamsInterface } from "~/shared/components/vInput/factory";
import { VLabelParamsInterface } from "~/shared/components/vLabel/factory";
import { VButtonParamsInterface } from "~/shared/components/vButton/factory";
import { AuthRequestInterface } from "~/shared/pages/auth/factory";

@Component({
  name: COMPONENT_NAME,
  components: {
    VInput,
    VLabel,
    VButton,
  },
})
export default class AuthForm extends Vue {
  readonly projectReposity = this.$projectServices.projectRepository;

  readonly VInputParamsLogin: VInputParamsInterface = VInputParamsLogin;
  readonly VInputParamsPassword: VInputParamsInterface = VInputParamsPassword;

  readonly VLabelParamsLogin: VLabelParamsInterface = VLabelParamsLogin;
  readonly VLabelParamsPassword: VLabelParamsInterface = VLabelParamsPassword;

  readonly VButtonParams: VButtonParamsInterface = VButtonParams;

  public user: AuthRequestInterface = {
    login: "admin@gmail.com",
    password: "adminadmin",
  };

  onChangeUserLogin(value: string): void {
    this.user.login = value;
  }

  onChangeUserPassword(value: string): void {
    this.user.password = value;
  }

  async onAuth() {
    await this.projectReposity.auth(this.user).then((res) => {
      console.log(res);
    });
  }
}
