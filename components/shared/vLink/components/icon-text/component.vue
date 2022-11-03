<template>
  <router-link :class="b()" :to="params.to">
    <i :class="[b('icon'), params.icon]"></i>
    <p :class="b('text')">
      {{ params.name }}
    </p>
  </router-link>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
