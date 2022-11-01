import { Component, Vue } from "nuxt-property-decorator";

import PostsForm from "./components/form/component";

import { PostsFormInterface } from "~/shared/pages/posts/factory";
import {
  VSelectDataFactory,
  VSelectDataInterface,
} from "~/shared/components/vSelect/factory";

import { COMPONENT_NAME, LAYOUT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  layout: LAYOUT_NAME,
  components: {
    PostsForm,
  },
})
export default class Posts extends Vue {
  public form: PostsFormInterface = {
    name: "",
    comment: "",
    nearestMeteo: "",
    areaCenterMeteo: "",
    isReservoir: false,
    isFavorite: false,
  };

  get getNearestMeteo(): VSelectDataInterface[] {
    return [VSelectDataFactory({ label: "1", value: "1" })];
  }

  get getAreaCenterMeteo(): VSelectDataInterface[] {
    return [VSelectDataFactory({ label: "2", value: "2" })];
  }

  // Form
  onChangeFormName(value: string): void {
    this.form.name = value;
  }

  onChangeFormComment(value: string): void {
    this.form.comment = value;
  }

  onChangeFormIsReservoir(value: boolean): void {
    this.form.isReservoir = value;
  }

  onChangeFormIsFavorite(value: boolean): void {
    this.form.isFavorite = value;
  }

  onChangeFormNearestMeteo(value: string): void {
    this.form.nearestMeteo = value;
  }

  onClearFormNearestMeteo(): void {
    this.form.nearestMeteo = "";
  }

  onChangeFormAreaCenterMeteo(value: string): void {
    this.form.areaCenterMeteo = value;
  }

  onClearFormAreaCenterMeteo(): void {
    this.form.areaCenterMeteo = "";
  }
}
