<template>
  <input
    :class="b()"
    type="text"
    :id="params.id"
    :placeholder="params.placeholder"
    v-model.trim="currentValue"
  />
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
