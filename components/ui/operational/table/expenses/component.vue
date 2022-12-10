<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <h4 :class="b('title')">
      Измеренные расходы
    </h4>

    <VTable
      :params="VTableParams"
      :columns="VTableColumns"
      :data="measuredDischarges"
    />
  </div>
</template>
