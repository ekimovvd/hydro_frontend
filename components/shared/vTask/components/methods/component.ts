import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import { TaskServerInterface } from "~/shared/entities/tasks/factory";
import { EventEnum } from "../../component/constants";

import {
  COLUMNS,
  ROWS,
  COMPONENT_NAME,
  CELLS,
  ColumnInterface,
  RowInterface,
  CellInterface,
} from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class VTaskMethods extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly form: TaskServerInterface;

  readonly COLUMNS: ColumnInterface[] = COLUMNS;
  readonly ROWS: RowInterface[] = ROWS;
  readonly CELLS: CellInterface[] = CELLS;

  onCellActiveClass(cell: CellInterface): string {
    const findPhase =
      this.form.TaskData.config.MethodByPhaseOptions.PhaseInfo.find(
        (phase) =>
          phase["@method"] === cell["@method"] &&
          phase["@phase"] === cell["@phase"]
      );

    return findPhase ? "v-task-methods__rows-cell--active" : "";
  }

  onCellEnabledClass(cell: CellInterface): string {
    return cell.isEnabled ? "v-task-methods__rows-cell--enabled" : "";
  }

  @Emit(EventEnum.phaseUpdate)
  onPhase(cell: CellInterface): CellInterface {
    return cell;
  }
}
