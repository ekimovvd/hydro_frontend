<template>
  <div :class="b()">
    <button :class="b('button')" @click="onChangeVisible">
      <i :class="[b('icon'), getButtonIcon]"></i>
    </button>
    <input
      :class="b('input')"
      :id="params.id"
      :type="inputType"
      :placeholder="params.placeholder"
      v-model.trim="currentValue"
    />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
