<template>
  <el-input-number
    :class="b()"
    :placeholder="params.placeholder"
    v-model="currentValue"
  ></el-input-number>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
