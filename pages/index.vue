<template>
  <div :class="b()">
    <div :class="b('container')">
      <HomeStations
        :stations="workStations"
        @work:stations:update="onUpdateWorkStations"
        @work:stations:list:update="onUpdateWorkStationsList"
      />
      <VTask :class="b('task')" :tasks="serverTasks" />
    </div>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
