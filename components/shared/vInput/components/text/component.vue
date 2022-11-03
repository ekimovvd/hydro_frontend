<template>
  <el-input
    :class="b()"
    :type="params.inputType"
    :id="params.id"
    :placeholder="params.placeholder"
    v-model="currentValue"
  ></el-input>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
