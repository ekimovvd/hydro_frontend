<template>
  <el-time-picker
    :class="b()"
    :placeholder="params.placeholder"
    :format="params.format"
    :value-format="params.format"
    v-model="currentValue"
  >
  </el-time-picker>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
