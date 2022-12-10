<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('container')">
      <VFilters
        :class="b('filters')"
        :work-stations="workStations"
        :selected-date-period.sync="selectedDatePeriod"
        :selected-work-station-id.sync="selectedWorkStationId"
      />

      <MethodsTransitionPeriods :transition-periods="transitionPeriods" />
    </div>
  </div>
</template>
