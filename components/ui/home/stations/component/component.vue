<template>
  <div :class="b()">
    <HomeStationsConfig :class="b('config')" />
    <HomeStationsTable
      :stations="stations"
      :station="station"
      :status="status"
      @station:update="onUpdateStation"
      @station:clear="onClearStation"
      @station:delete="onDeleteStation"
    />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
