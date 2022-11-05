<template>
  <div :class="b()">
    <h4 :class="b('title')">Список постов</h4>
    <div :class="b('group')">
      <VSelect :params="VSelectParamsTerm" :data="[]" :value="''" />
    </div>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
