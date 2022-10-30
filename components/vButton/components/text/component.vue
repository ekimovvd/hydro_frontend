<template>
  <button :class="[b(), getStyleViewClass, getFullViewClass]" @click="onClick">
    {{ params.label }}
  </button>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
