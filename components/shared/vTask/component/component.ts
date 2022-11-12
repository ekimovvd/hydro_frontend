import { Component, Prop, Vue } from "nuxt-property-decorator";

import { TaskServerInterface } from "~/shared/entities/tasks/factory";

import VTaskTable from "../components/table/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VTaskTable,
  },
})
export default class VTask extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly tasks: TaskServerInterface[];
}
