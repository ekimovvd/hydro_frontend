<template>
  <div :class="b()">
    <h4 :class="b('title')">Список задач для всех постов</h4>
    <VTaskTable :tasks="tasks" />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
