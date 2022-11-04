<template>
  <el-popconfirm
    :class="b()"
    :title="params.title"
    :confirm-button-text="params.confirmButtonText"
    :cancel-button-text="params.cancelButtonText"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <el-button slot="reference" :disabled="getDisabled">
      {{ getLabel }}
    </el-button>
  </el-popconfirm>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
