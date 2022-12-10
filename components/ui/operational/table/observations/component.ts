import { Component, Prop, Vue } from "nuxt-property-decorator";
import { COMPONENT_NAME, VTableParams, VTableColumns } from "./constants";
import VTable from "~/components/shared/vTable/component/component";
import { OperationalObsDataInterface } from "~/shared/entities/operational/factory";
import { VTableColumnInterface, VTableParamsInterface } from "~/shared/components/vTable/factory";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTable,
  }
})
export default class OperationalTableObservations extends Vue {
  @Prop({
    type: Object,
    required: true
  }) readonly obsData: OperationalObsDataInterface;

  readonly VTableParams: VTableParamsInterface = VTableParams;
  readonly VTableColumns: VTableColumnInterface[] = VTableColumns;
}
