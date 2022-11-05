<template>
  <router-link :class="[b(), getViewStyleClass]" :to="params.to">
    {{ params.name }}
  </router-link>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
