<template>
  <div :class="b()">
    <div :class="b('header')">
      <p :class="b('header-label')">Методы расчета расхода</p>
    </div>
    <div :class="b('columns')">
      <div :class="b('columns-column')"></div>
      <div :class="b('columns-cells')">
        <div
          :class="b('columns-cell')"
          v-for="column in COLUMNS"
          :key="column.id"
        >
          {{ column.name }}
        </div>
      </div>
    </div>
    <div :class="b('rows-group')">
      <div :class="b('rows')">
        <div :class="b('rows-row')" v-for="row in ROWS" :key="row.id">
          {{ row.name }}
        </div>
      </div>
      <div :class="b('rows-cells')">
        <button
          :class="[
            b('rows-cell'),
            onCellActiveClass(cell),
            onCellEnabledClass(cell),
          ]"
          v-for="cell in CELLS"
          :key="cell.id"
          :disabled="cell.isEnabled"
          @click="onPhase(cell)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
