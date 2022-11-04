import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import { VTablePaginationInterface } from "~/shared/components/vTable/factory";

import { COMPONENT_NAME } from "./constants";
import { EventEnum } from "../../component/constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VTablePagination extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VTablePaginationInterface;
  @Prop({
    type: Number,
    required: true,
  })
  readonly total: number;

  @Emit(EventEnum.currentPageChange)
  onChangeCurrentPage(value: number): void {}
}
