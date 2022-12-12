<template>
  <div :class="b()">
    <div :class="b('container')">
      <HomeStations
        :stations="workStations"
        @work:stations:update="onUpdateWorkStations"
      />
      <VTask
        :class="b('task')"
        :tasks="serverTasks"
        :stations="workStations"
        @server:tasks:update="onUpdateServerTasks"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
