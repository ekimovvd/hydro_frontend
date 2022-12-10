<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('container')">
      <VPicker
        :class="b('component')"
        :params="VPickerParams"
        :value="pickerDatePeriodValue"
        @change="updateDatePeriod"
      />

      <VSelect
        :class="b('component')"
        :params="VSelectParams"
        :data="selectWorkStations"
        :value="selectWorkStationValue"
        @select="updateWorkStationId"
        @clear="updateWorkStationId(null)"
      />
    </div>
  </div>
</template>
