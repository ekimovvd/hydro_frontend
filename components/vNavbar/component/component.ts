import { Component, Vue } from "nuxt-property-decorator";

import VNavbarList from "../components/list/component";

import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
  components: {
    VNavbarList,
  },
})
export default class VNavbar extends Vue {}
