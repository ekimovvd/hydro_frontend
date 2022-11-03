<template>
  <section :class="b()">
    <div :class="b('container')">
      <StationsWork :stations="workStations" />
    </div>
  </section>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
