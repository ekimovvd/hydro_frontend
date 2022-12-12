import { Component, Prop, Vue } from "nuxt-property-decorator";
import { TransitionPeriodPointInterface } from "~/shared/entities/transition-periods/factory";
import { COMPONENT_NAME } from "./constants";

@Component({
  name: COMPONENT_NAME,
})
export default class MethodsTransitionPeriodsChart extends Vue {
  @Prop({
    type: Array,
    required: true
  }) readonly points: TransitionPeriodPointInterface[];

  readonly chartOptions = {
    fill: {
      type:'solid',
    },
    markers: {
      size: [6, 0]
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
    legend: {
      show: false
    },
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 12,
      tickAmount: 12
    }
  };

  get series(): unknown[] {
    return [
      {
        name: 'Points',
        type: 'scatter',
        data: this.points.map(item => ({ x: item.sumT, y: item.devQ }))
      }
    ]
  }
}
