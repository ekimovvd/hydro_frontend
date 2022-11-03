<template>
  <div :class="b()">
    <VTable
      :params="VTableParams"
      :columns="getVTableColumns"
      :data="data"
      :row-key="form.ID"
      @selection="onChangeSelection"
      @row="onChangeRow"
    />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
