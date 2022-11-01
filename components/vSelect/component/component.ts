import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VSelectDataInterface,
  VSelectEventEnum,
  VSelectParamsInterface,
  VSelectParamsTypeEnum,
} from "~/shared/components/vSelect/factory";

import VSelectDefault from "../components/default/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    "default-component": VSelectDefault,
  },
})
export default class VSelect extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VSelectParamsInterface;
  @Prop({
    type: String,
    required: true,
  })
  readonly value: string;
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly data: VSelectDataInterface[];

  get getComponent(): VSelectParamsTypeEnum {
    return this.params.type;
  }

  @Emit(VSelectEventEnum.select)
  onSelect(): void {}

  @Emit(VSelectEventEnum.clear)
  onClear(): void {}
}
