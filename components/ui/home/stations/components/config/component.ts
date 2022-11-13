import { Component, Vue } from "nuxt-property-decorator";

import VSelect from "~/components/shared/vSelect/component/component";

import { VSelectParamsInterface } from "~/shared/components/vSelect/factory";

import { COMPONENT_NAME, VSelectParamsTerm } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VSelect,
  },
})
export default class HomeStationsConfig extends Vue {
  readonly VSelectParamsTerm: VSelectParamsInterface = VSelectParamsTerm;
}
