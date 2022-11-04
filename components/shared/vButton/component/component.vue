<template>
  <div :class="[b(), getFullViewClass]">
    <component
      :is="getComponent"
      :params="params"
      :status="status"
      :disabled="disabled"
      @click="onClick"
    ></component>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
