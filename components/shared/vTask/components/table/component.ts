import { Component, Prop, Vue } from "nuxt-property-decorator";

import VTable from "~/components/shared/vTable/component/component";

import {
  VTableCellInterface,
  VTableColumnInterface,
  VTableParamsInterface,
} from "~/shared/components/vTable/factory";

import { TaskServerInterface } from "~/shared/entities/tasks/factory";
import { EventEnum } from "../../component/constants";

import {
  COMPONENT_NAME,
  VTableCells,
  VTableColumns,
  VTableParams,
} from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTable,
  },
})
export default class VTaskTable extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly tasks: TaskServerInterface[];
  @Prop({
    type: Object,
    required: true,
  })
  readonly task: TaskServerInterface;

  readonly VTableParams: VTableParamsInterface = VTableParams;
  readonly VTableColumns: VTableColumnInterface[] = VTableColumns;
  readonly VTableCells: VTableCellInterface[] = VTableCells;

  onChangeRow(value: TaskServerInterface): void {
    this.$emit(
      this.task.ID === value.ID ? EventEnum.taskClear : EventEnum.task,
      value
    );
  }
}
