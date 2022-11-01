<template>
  <el-select
    :class="[b(), getSelectStyleViewClass]"
    v-model="currentValue"
    :placeholder="params.placeholder"
    :popper-class="b(params.popperClass)"
    :popper-append-to-body="params.popperAppendToBody"
    @visible-change="onIsVisible"
  >
    <el-option
      v-for="element in data"
      :key="element.value"
      :label="element.label"
      :value="element.value"
    >
    </el-option>
    <template slot="prefix">
      <div :class="b('prefix')">
        <button v-if="getClearIsShow" :class="b('clear')" @click.stop="onClear">
          <i :class="[b('icon'), 'bx bx-x']"></i>
        </button>
        <i :class="[b('icon'), getChevronIcon]"></i>
      </div>
    </template>
  </el-select>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
