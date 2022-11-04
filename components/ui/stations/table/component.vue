<template>
  <div :class="b()">
    <h4 :class="b('title')">Список постов</h4>
    <div :class="b('offer')">
      <VTable
        :params="VTableParams"
        :columns="VTableColumns"
        :data="stations"
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
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
