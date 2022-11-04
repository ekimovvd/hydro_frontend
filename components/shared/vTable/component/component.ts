import { Component, Emit, Prop, Vue, Watch } from "nuxt-property-decorator";

import VTableSelection from "../components/selection/component";
import VTableTag from "../components/tag/component";
import VTablePagination from "../components/pagination/component";

import {
  VTableColumnInterface,
  VTableEventEnum,
  VTableParamsInterface,
} from "~/shared/components/vTable/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";

import { COMPONENT_NAME, VTableRowStyleViewClass } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTableSelection,
    VTableTag,
    VTablePagination,
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
    type: Array,
    default: () => [],
  })
  readonly rowIds: Array<string | number>;
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly selections: WorkStationInterface[];
  @Prop({
    type: [String, Number],
    default: "",
  })
  readonly rowKey: string | number;

  public page: number = 1;
  private pageSize: number = 10;

  get getData(): WorkStationInterface[] {
    return this.data.slice(
      this.pageSize * this.page - this.pageSize,
      this.pageSize * this.page
    );
  }

  get getTotal(): number {
    return this.data.length;
  }

  @Watch("selections")
  onClearSelections(value: WorkStationInterface[]): void {
    if (!value.length) {
      this.$refs.table.clearSelection();
    }
  }

  @Emit(VTableEventEnum.selection)
  onChangeSelection(value: WorkStationInterface[]): void {}

  @Emit(VTableEventEnum.row)
  onClickRow(value: WorkStationInterface): void {}

  onTableRowClassName({ row }): VTableRowStyleViewClass {
    return this.rowIds.find((element) => element === row[this.params.rowKey])
      ? VTableRowStyleViewClass.success
      : VTableRowStyleViewClass.default;
  }

  onChangeCurrentPage(value: number): void {
    this.page = value;
  }
}
