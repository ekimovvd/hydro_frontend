import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VSelectIconEnum,
  VSelectDataInterface,
  VSelectEventEnum,
  VSelectParamsInterface,
  VSelectParamsStyleEnum,
} from "~/shared/components/vSelect/factory";

import { COMPONENT_NAME, VSelectStyleViewClassEnum } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VSelectDefault extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VSelectParamsInterface;
  @Prop({
    type: [String, Number],
    required: true,
  })
  readonly value: string | number;
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly data: VSelectDataInterface[];

  public isVisible: boolean = false;

  get currentValue(): string | number {
    return this.value;
  }

  set currentValue(value: string | number) {
    this.$emit(VSelectEventEnum.select, value);
  }

  get getSelectStyleViewClass(): VSelectStyleViewClassEnum {
    switch (this.params.style) {
      case VSelectParamsStyleEnum.gray:
        return VSelectStyleViewClassEnum.gray;
      case VSelectParamsStyleEnum.primary:
        return VSelectStyleViewClassEnum.primary;
      case VSelectParamsStyleEnum.success:
        return VSelectStyleViewClassEnum.success;
      case VSelectParamsStyleEnum.violet:
          return VSelectStyleViewClassEnum.violet;
      default:
        return VSelectStyleViewClassEnum.default;
    }
  }

  get getChevronIcon(): VSelectIconEnum {
    return this.isVisible
      ? VSelectIconEnum.chevronUp
      : VSelectIconEnum.chevronDown;
  }

  get getClearIsShow(): boolean {
    return this.value ? true : false;
  }

  onIsVisible(): void {
    this.isVisible = !this.isVisible;
  }

  @Emit(VSelectEventEnum.clear)
  onClear(): void {}
}
