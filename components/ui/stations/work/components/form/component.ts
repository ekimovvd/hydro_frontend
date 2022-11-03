import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VSelect from "~/components/shared/vSelect/component/component";
import VLabel from "~/components/shared/vLabel/component/component";
import VInput from "~/components/shared/vInput/component/component";
import VPopconfirm from "~/components/shared/vPopconfirm/component/component";
import VButton from "~/components/shared/vButton/component/component";

import {
  VSelectDataInterface,
  VSelectParamsInterface,
} from "~/shared/components/vSelect/factory";
import { VLabelParamsInterface } from "~/shared/components/vLabel/factory";
import { VInputParamsInterface } from "~/shared/components/vInput/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import { VPopconfirmParamsInterface } from "~/shared/components/vPopconfirm/factory";
import { VButtonParamsInterface } from "~/shared/components/vButton/factory";
import { StatusInterface } from "~/shared/entities/status/factory";

import {
  COMPONENT_NAME,
  VButtonParamsSave,
  VInputParamsComment,
  VInputParamsIsFavorite,
  VInputParamsIsReservoir,
  VInputParamsName,
  VLabelParamsAreaCenterMeteo,
  VLabelParamsComment,
  VLabelParamsName,
  VLabelParamsNearestMeteo,
  VPopconfirmParamsDelete,
  VSelectParamsAreaCenterMeteo,
  VSelectParamsNearestMeteo,
} from "./constants";
import { EventEnum } from "../../component/constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VSelect,
    VLabel,
    VInput,
    VPopconfirm,
    VButton,
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
  @Prop({
    type: Object,
    required: true,
  })
  readonly status: StatusInterface;

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

  readonly VPopconfirmParamsDelete: VPopconfirmParamsInterface =
    VPopconfirmParamsDelete;
  readonly VButtonParamsSave: VButtonParamsInterface = VButtonParamsSave;

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

  @Emit(EventEnum.stationRemove)
  onRemoveStation(): void {}

  @Emit(EventEnum.stationSave)
  onSaveStation(): void {}
}
