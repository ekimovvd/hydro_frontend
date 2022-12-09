import { Component, Prop, Vue } from "nuxt-property-decorator";

import { TaskServerInterface } from "~/shared/entities/tasks/factory";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VTaskMethods extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly form: TaskServerInterface;
}
