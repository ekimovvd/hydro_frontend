import { Component, Prop, Vue } from "nuxt-property-decorator";
import { VTableColumnInterface, VTableParamsInterface } from "~/shared/components/vTable/factory";
import { OperationalMeasuredDischargesInterface } from "~/shared/entities/operational/factory";
import { COMPONENT_NAME, VTableParams, VTableColumns } from "./constants";
import VTable from "~/components/shared/vTable/component/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTable
  }
})
export default class OperationalTableExpenses extends Vue {
  @Prop({
    type: Array,
    required: true
  }) readonly measuredDischarges: OperationalMeasuredDischargesInterface[];

  readonly VTableParams: VTableParamsInterface = VTableParams;
  readonly VTableColumns: VTableColumnInterface[] = VTableColumns;
}
