import { Component, Prop, Vue } from "nuxt-property-decorator";
import { COMPONENT_NAME, VTableParams, VTableColumns, VTableCells } from "./constants";
import VTable from "~/components/shared/vTable/component/component";
import { TaskServerSummaryInterface } from "~/shared/entities/tasks/factory";
import { VTableCellInterface, VTableColumnInterface, VTableParamsInterface } from "~/shared/components/vTable/factory";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTable,
  }
})
export default class OperationalTableTasks extends Vue {
  @Prop({
    type: Array,
    required: true
  }) readonly serverTasksSummary: TaskServerSummaryInterface[];

  readonly VTableParams: VTableParamsInterface = VTableParams;
  readonly VTableColumns: VTableColumnInterface[] = VTableColumns;
  readonly VTableCells: VTableCellInterface[] = VTableCells;
}
