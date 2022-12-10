<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <h4 :class="b('title')">
      Настройка переходных периодов
    </h4>

    <div :class="b('group')">
      <div :class="b('block')">
        <VSelect
          :class="b('select')"
          :params="selectParams"
          :data="selectPeriods"
          :value="selectPeriod"
          @select="onSelectPeriod"
          @clear="onClearPeriod"
        />

        <VTable
          :params="VTableParams"
          :columns="VTableColumns"
          :data="points"
        />
      </div>

      <MethodsTransitionPeriodsChart :points="points" />
    </div>
  </div>
</template>
