<template>
  <button
    :class="[b(), getStyleViewClass, getFullViewClass]"
    :disabled="getDisabled"
    @click="onClick"
  >
    {{ getLabel }}
  </button>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
