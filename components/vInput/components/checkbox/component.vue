<template>
  <el-checkbox :class="b()" v-model="currentValue">
    {{ params.text }}
  </el-checkbox>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
