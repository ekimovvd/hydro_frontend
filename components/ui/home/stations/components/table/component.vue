<template>
  <div :class="b()">
    <VTable
      :params="VTableParams"
      :columns="VTableColumns"
      :data="stations"
      :selections="selectionStations"
      :row-key="station.ID"
      @selection="onChangeSelection"
      @row="onChangeRow"
    />
    <div :class="b('group')">
      <VButton
        :params="VButtonParamsPairing"
        :status="status"
        :disabled="getButtonPairingDisabled"
        @click="onStationPairing"
      />
      <VLink :params="VLinkParams" />
      <VButton
        :params="VButtonParamsDelete"
        :status="status"
        :disabled="getButtonDeleteDisabled"
        @click="onStationDelete"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
