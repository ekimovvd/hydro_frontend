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

      <div :class="b('group')">
        <VOperationalTableExpenses :measured-discharges="measuredDischarges" />

        <VOperationalTableTasks :server-tasks-summary="serverTasksSummary" />
      </div>

      <div :class="b('group')">
        <VOperationalTablePhaseHistory
          :full-phase-history="fullPhaseHistory"
          @create-history="createPhaseHistory"
        />
      </div>
    </div>
  </div>
</template>
