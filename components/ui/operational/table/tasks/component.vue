<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <h4 :class="b('title')">
      Список задач для поста
    </h4>

    <VTable
      :params="VTableParams"
      :columns="VTableColumns"
      :data="serverTasksSummary"
      :cells="VTableCells"
    />
  </div>
</template>
