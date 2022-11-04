import Vue from "vue";
import {
  Select,
  Option,
  Input,
  Checkbox,
  Radio,
  Table,
  TableColumn,
  Popconfirm,
  Button,
  Pagination,
  Notification,
} from "element-ui";
import lang from "element-ui/lib/locale/lang/ru-RU";
import locale from "element-ui/lib/locale";
import "element-ui/lib/theme-chalk/notification.css";

locale.use(lang);

Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popconfirm);
Vue.use(Button);
Vue.use(Pagination);

Vue.prototype.$notify = Notification;
