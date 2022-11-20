<template>
  <component
    :class="b()"
    :is="getComponent"
    :params="params"
    :value="value"
    @change="onChangeValue"
  ></component>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
