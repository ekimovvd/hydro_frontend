<template>
  <div :class="b()">
    <component
      :is="getComponent"
      :params="params"
      :value="value"
      @change="onChangeValue"
    ></component>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
