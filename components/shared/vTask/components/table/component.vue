<template>
  <div :class="b()">
    <VTable
      :params="VTableParams"
      :columns="VTableColumns"
      :data="tasks"
      :cells="VTableCells"
    />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
