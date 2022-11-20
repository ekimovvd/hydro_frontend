<template>
  <el-date-picker
    :class="b()"
    :type="params.type"
    :placeholder="params.placeholder"
    :editable="false"
    :format="params.format"
    :value-format="params.format"
    v-model="currentValue"
  >
  </el-date-picker>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
