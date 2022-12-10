<template>
  <div :class="b()">
    <h4 :class="b('title')">Список задач для всех постов</h4>
    <div :class="b('group')">
      <VTaskTable
        :tasks="tasks"
        :task="task"
        @task="onChangeTask"
        @task:clear="onClearTask"
      />
      <VTaskForm
        :form="task"
        :stations="stations"
        :status="status"
        :calculation-period="calculationPeriod"
        :is-reservoir="isReservoir"
        @station:update="onUpdateStation"
        @station:clear="onClearStation"
        @task:type:update="onUpdateTaskType"
        @task:type:clear="onClearTaskType"
        @status:update="onUpdateStatus"
        @status:clear="onClearStatus"
        @scheduled:time:update="onUpdateScheduledTime"
        @skip:errors:update="onUpdateSkipErrors"
        @mode:update="onUpdateMode"
        @mode:clear="onClearMode"
        @calculation:period:update="onUpdateCalculationPeriod"
        @calculation:period:clear="onClearCalculationPeriod"
        @calculation:period:relative:update="onUpdateCalculationPeriodRelative"
        @calculation:period:fixed:update="onUpdateCalculationPeriodFixed"
        @interval:days:update="onUpdateIntervalDays"
        @interval:time:update="onUpdateIntervalTime"
        @period:update="onUpdatePeriod"
        @period:ext:update="onUpdatePeriodExt"
        @calc:step:days:update="onUpdateCalcStepDays"
        @corr:q:update="onUpdateCorrQ"
        @task:create="onTaskCreate"
        @task:save="onTaskSave"
        @task:delete="onTaskDelete"
        @phase:update="onUpdatePhase"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
