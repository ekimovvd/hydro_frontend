import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VSelect from "~/components/vSelect/component/component";
import VLabel from "~/components/vLabel/component/component";
import VInput from "~/components/vInput/component/component";

import {
  VSelectDataInterface,
  VSelectParamsInterface,
} from "~/shared/components/vSelect/factory";
import { VLabelParamsInterface } from "~/shared/components/vLabel/factory";
import { PostsFormInterface } from "~/shared/pages/posts/factory";
import { VInputParamsInterface } from "~/shared/components/vInput/factory";

import {
  COMPONENT_NAME,
  VInputParamsComment,
  VInputParamsIsFavorite,
  VInputParamsIsReservoir,
  VInputParamsName,
  VLabelParamsAreaCenterMeteo,
  VLabelParamsComment,
  VLabelParamsName,
  VLabelParamsNearestMeteo,
  VSelectParamsAreaCenterMeteo,
  VSelectParamsNearestMeteo,
} from "./constants";
import { EventEnum } from "../../constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VSelect,
    VLabel,
    VInput,
  },
})
export default class PostsForm extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly form: PostsFormInterface;
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly nearestMeteo: VSelectDataInterface[];
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly areaCenterMeteo: VSelectDataInterface[];

  readonly VSelectParamsNearestMeteo: VSelectParamsInterface =
    VSelectParamsNearestMeteo;
  readonly VSelectParamsAreaCenterMeteo: VSelectParamsInterface =
    VSelectParamsAreaCenterMeteo;

  readonly VLabelParamsNearestMeteo: VLabelParamsInterface =
    VLabelParamsNearestMeteo;
  readonly VLabelParamsAreaCenterMeteo: VLabelParamsInterface =
    VLabelParamsAreaCenterMeteo;

  readonly VInputParamsName: VInputParamsInterface = VInputParamsName;
  readonly VLabelParamsName: VLabelParamsInterface = VLabelParamsName;

  readonly VInputParamsComment: VInputParamsInterface = VInputParamsComment;
  readonly VLabelParamsComment: VLabelParamsInterface = VLabelParamsComment;

  readonly VInputParamsIsReservoir: VInputParamsInterface =
    VInputParamsIsReservoir;
  readonly VInputParamsIsFavorite: VInputParamsInterface =
    VInputParamsIsFavorite;

  @Emit(EventEnum.formName)
  onChangeName(): void {}

  @Emit(EventEnum.formComment)
  onChangeComment(): void {}

  @Emit(EventEnum.formIsReservoir)
  onChangeIsReservoir(): void {}

  @Emit(EventEnum.formIsFavorite)
  onChangeIsFavorite(): void {}

  @Emit(EventEnum.formNearestMeteo)
  onSelectNearestMeteo(): void {}

  @Emit(EventEnum.formClearNearestMeteo)
  onClearNearestMeteo(): void {}

  @Emit(EventEnum.formAreaCenterMeteo)
  onSelectAreaCenterMeteo(): void {}

  @Emit(EventEnum.formClearAreaCenterMeteo)
  onClearAreaCenterMeteo(): void {}
}
