<template>
  <ul :class="b()">
    <VNavbarItem v-for="item in VLinks" :key="item.to" :item="item" />
  </ul>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
