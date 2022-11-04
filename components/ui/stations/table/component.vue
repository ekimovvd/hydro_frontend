<template>
  <div :class="b()">
    <VTable
      :params="VTableParams"
      :columns="VTableColumns"
      :data="getStations"
      :row-key="station.ID"
      :row-ids="getWorkStationsIds"
      :selections="hydroStations"
      @selection="onChangeSelection"
      @row="onChangeRow"
    />
    <VButton
      :params="VButtonParamsAdd"
      :status="status"
      :disabled="getButtonAddDisabled"
      @click="onAddStations"
    />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
