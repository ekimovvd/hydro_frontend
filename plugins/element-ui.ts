import Vue from "vue";
import {
  Select,
  Option,
  Input,
  Checkbox,
  Radio,
  Table,
  TableColumn,
} from "element-ui";
import lang from "element-ui/lib/locale/lang/ru-RU";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(Table);
Vue.use(TableColumn);
