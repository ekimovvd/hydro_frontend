<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <client-only>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      />
    </client-only>
  </div>
</template>
