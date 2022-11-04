<template>
  <div :class="b()">
    <div :class="b('container')">
      <div :class="b('group')">
        <StationsTable
          :stations="hydroStations"
          :work-stations="workStations"
          :station="hydroStation"
          @station="onChangeStation"
          @station:clear="onClearStation"
          @work:stations:update="onUpdateWorkStations"
        />
        <StationsMap />
      </div>
      <StationsWork
        :stations="workStations"
        @work:stations:update="onUpdateWorkStations"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
