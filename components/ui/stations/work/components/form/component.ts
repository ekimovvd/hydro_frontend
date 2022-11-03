import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VSelect from "~/components/shared/vSelect/component/component";
import VLabel from "~/components/shared/vLabel/component/component";
import VInput from "~/components/shared/vInput/component/component";

import {
  VSelectDataInterface,
  VSelectParamsInterface,
} from "~/shared/components/vSelect/factory";
import { VLabelParamsInterface } from "~/shared/components/vLabel/factory";
import { VInputParamsInterface } from "~/shared/components/vInput/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import { EventEnum } from "../../component/constants";

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

@Component({
  name: COMPONENT_NAME,
  components: {
    VSelect,
    VLabel,
    VInput,
  },
})
export default class StationsWorkForm extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly form: WorkStationInterface;
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

  get getCommentValue(): string {
    return this.form.Comment !== null ? this.form.Comment : "";
  }

  get getNearestMeteoValue(): number | string {
    return this.form.NearestMeteoID !== null ? this.form.NearestMeteoID : "";
  }

  get getAreaCenterValue(): number | string {
    return this.form.AreaCenterMeteoID !== null
      ? this.form.AreaCenterMeteoID
      : "";
  }

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
