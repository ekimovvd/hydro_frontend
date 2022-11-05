<template>
  <section :class="b()">
    <div :class="b('container')">
      <HomeStations
        :stations="workStations"
        @work:stations:update="onUpdateWorkStations"
        @work:stations:list:update="onUpdateWorkStationsList"
      />
    </div>
  </section>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
