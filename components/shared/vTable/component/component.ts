import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VTableSelection from "../components/selection/component";
import VTableTag from "../components/tag/component";

import {
  VTableColumnInterface,
  VTableEventEnum,
  VTableParamsInterface,
} from "~/shared/components/vTable/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTableSelection,
    VTableTag,
  },
})
export default class VTable extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VTableParamsInterface;
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly columns: VTableColumnInterface[];
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly data: WorkStationInterface[];
  @Prop({
    type: [String, Number],
    default: "",
  })
  readonly rowKey: string | number;

  @Emit(VTableEventEnum.selection)
  onChangeSelection(value: WorkStationInterface[]): void {}

  @Emit(VTableEventEnum.row)
  onClickRow(value: WorkStationInterface) {}
}
