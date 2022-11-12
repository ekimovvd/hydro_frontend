import { Component, Emit, Prop, Vue, Watch } from "nuxt-property-decorator";
import { utc } from "moment";

import VTableSelection from "../components/selection/component";
import VTableTag from "../components/tag/component";
import VTablePagination from "../components/pagination/component";

import {
  VTableCellInterface,
  VTableColumnInterface,
  VTableEventEnum,
  VTableParamsInterface,
} from "~/shared/components/vTable/factory";
import { WorkStationInterface } from "~/shared/entities/stations/factory";
import { TaskServerInterface } from "~/shared/entities/tasks/factory";

import {
  COMPONENT_NAME,
  VTableCellStyleViewClass,
  VTableRowStyleViewClass,
} from "./constants";

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
  readonly data: WorkStationInterface[] | TaskServerInterface[];
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly rowIds: Array<string | number>;
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly selections: WorkStationInterface[] | TaskServerInterface[];
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly cells: VTableCellInterface[];
  @Prop({
    type: [String, Number],
    default: "",
  })
  readonly rowKey: string | number;

  public page: number = 1;
  private pageSize: number = 10;

  get getData(): WorkStationInterface[] | TaskServerInterface[] {
    return this.data.slice(
      this.pageSize * this.page - this.pageSize,
      this.pageSize * this.page
    );
  }

  get getTotal(): number {
    return this.data.length;
  }

  @Watch("selections")
  onClearSelections(
    value: WorkStationInterface[] | TaskServerInterface[]
  ): void {
    if (!value.length) {
      (this.$refs.table as any).clearSelection();
    }
  }

  @Emit(VTableEventEnum.selection)
  onChangeSelection(
    value: WorkStationInterface[] | TaskServerInterface[]
  ): void {}

  @Emit(VTableEventEnum.row)
  onClickRow(value: WorkStationInterface | TaskServerInterface[]): void {}

  onTableRowClassName({ row }): VTableRowStyleViewClass {
    return this.rowIds.find((element) => element === row[this.params.rowKey])
      ? VTableRowStyleViewClass.success
      : VTableRowStyleViewClass.default;
  }

  onTableCellClassName({ row, column }): VTableCellStyleViewClass {
    const findCell = this.cells.find((cell) => cell.prop === column.property);

    return findCell
      ? VTableCellStyleViewClass[findCell.keys[row[column.property]]]
      : VTableCellStyleViewClass.default;
  }

  onChangeCurrentPage(value: number): void {
    this.page = value;
  }

  onFormattingCell(
    row: WorkStationInterface | TaskServerInterface,
    column: VTableColumnInterface
  ) {
    const { prop, tree, keys, date } = column;

    if (tree) {
      let rowValue = null;

      prop.split(".").forEach((key, index) => {
        if (index === 0) {
          rowValue = row[key];
        } else {
          rowValue = rowValue[key];
        }
      });
      return rowValue;
    }
    if (keys.isEnabled) {
      return keys.keys[row[prop]];
    }
    if (date) {
      return row[prop]
        ? utc(row[prop]).format("YYYY-MM-DD HH:mm:ss")
        : "Не известно";
    }
    return row[prop];
  }
}
