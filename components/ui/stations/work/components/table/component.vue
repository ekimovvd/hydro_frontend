<template>
  <div :class="b()">
    <h4 :class="b('title')">Рабочий список постов</h4>
    <VTable
      :params="VTableParams"
      :columns="VTableColumns"
      :data="stations"
      :row-key="form.ID"
      @selection="onChangeSelection"
      @row="onChangeRow"
    />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
