<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div :class="b()">
    <h4 :class="b('title')">
      Редактор фаз водного режима
    </h4>

    <VTable
      :params="VTableParams"
      :columns="VTableColumns"
      :data="fullPhaseHistory"
    />

    <div :class="b('form')">
      <VPicker
        :params="VPickerParams"
        :value="getStartDateValue"
        @change="changeStartDate"
      />

      <VSelect
        :params="VSelectParams"
        :value="getPhaseValue"
        :data="getPhaseOptions"
        @select="updateForm('phase', $event)"
        @clear="updateForm('phase', null)"
      />

      <VSelect
        :params="VSelectParams"
        :value="getRecTypeValue"
        :data="getRecTypeOptions"
        @select="updateForm('recType', $event)"
        @clear="updateForm('recType', null)"
      />

      <VButton
        :class="b('button')"
        :params="VButtonParams"
        :status="status"
        :disabled="isButtonDisabled"
        @click="createHistory"
      />
    </div>
  </div>
</template>
