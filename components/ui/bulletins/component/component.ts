import { Component, Vue } from "nuxt-property-decorator";

import BulletinsWrapperTable from "../components/table/component";
import BulletinsWrapperForm from "../components/form/component";
import BulletinsWrapperStations from "../components/stations/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    BulletinsWrapperTable,
    BulletinsWrapperForm,
    BulletinsWrapperStations,
  },
})
export default class BulletinsWrapper extends Vue {}
