<template>
  <form :class="b()" @submit.prevent="">
    <div :class="b('block')">
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsStation" />
        <VSelect
          :params="VSelectParamsStation"
          :data="getStations"
          :value="getStationValue"
          @select="onSelectStation"
          @clear="onClearStation"
        />
      </div>
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsTaskType" />
        <VSelect
          :params="VSelectParamsTaskType"
          :data="VSelectDataTaskType"
          :value="getTaskTypeValue"
          @select="onSelectTaskType"
          @clear="onClearTaskType"
        />
      </div>
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsScheduledTime" />
        <VPicker
          :params="VPickerParamsScheduledTime"
          :value="getScheduledTimeValue"
          @change="onChangeScheduledTime"
        />
      </div>
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsStatus" />
        <VSelect
          :params="VSelectParamsStatus"
          :data="VSelectDataStatus"
          :value="getStatusValue"
          @select="onSelectStatus"
          @clear="onClearStatus"
        />
      </div>
      <div :class="b('group')">
        <VInput
          :params="VInputParamsSkipErrors"
          :value="getSkipErrorsValue"
          @change="onChangeSkipErrors"
        />
      </div>
    </div>
    <div :class="b('block')">
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsIntervalDays" />
        <VInput
          :params="VInputParamsInterval"
          :value="getIntervalDaysValue"
          @change="onChangeIntervalDays"
        />
      </div>
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsIntervalTime" />
        <VPicker
          :params="VPickerParamsIntervalTime"
          :value="getIntervalTimeValue"
          @change="onChangeIntervalTime"
        />
      </div>
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsMode" />
        <VSelect
          :params="VSelectParamsMode"
          :data="VSelectDataMode"
          :value="getModeValue"
          @select="onSelectMode"
          @clear="onClearMode"
        />
      </div>
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsCalculationPeriod" />
        <VSelect
          :params="VSelectParamsCalculationPeriod"
          :data="VSelectDataCalculationPeriod"
          :value="calculationPeriod"
          @select="onSelectCalculationPeriod"
          @clear="onClearCalculationPeriod"
        />
      </div>
      <div :class="b('group')" v-if="getCalculationPeriodRelative">
        <VLabel
          :class="b('label')"
          :params="VLabelParamsCalculationPeriodRelative"
        />
        <VPicker
          :params="VPickerParamsCalculationPeriodRelative"
          :value="getCalculationPeriodRelativeValue"
          @change="onChangeCalculationPeriodRelative"
        />
      </div>
      <div :class="b('group')" v-if="getCalculationPeriodFixed">
        <VLabel
          :class="b('label')"
          :params="VLabelParamsCalculationPeriodFixed"
        />
        <VPicker
          :params="VPickerParamsCalculationPeriodFixed"
          :value="getCalculationPeriodFixedValue"
          @change="onChangeCalculationPeriodFixed"
        />
      </div>
    </div>
    <div :class="b('block')">
      <div :class="b('reservoir')" v-if="getIsShowReservoirBlock">
        <div :class="b('group')">
          <VLabel :class="b('label')" :params="VLabelParamsPeriod" />
          <VInput
            :params="VInputParamsPeriod"
            :value="getPeriodValue"
            @change="onChangePeriod"
          />
        </div>
        <div :class="b('group')">
          <VLabel :class="b('label')" :params="VLabelParamsPeriodExt" />
          <VInput
            :params="VInputParamsPeriodExt"
            :value="getPeriodExtValue"
            @change="onChangePeriodExt"
          />
        </div>
        <div :class="b('group')">
          <VLabel :class="b('label')" :params="VLabelParamsCalcStepDays" />
          <VInput
            :params="VInputParamsCalcStepDays"
            :value="getCalcStepDaysValue"
            @change="onChangeCalcStepDays"
          />
        </div>
        <div :class="b('group')">
          <VInput
            :params="VInputParamsCorrQ"
            :value="getCorrQValue"
            @change="onChangeCorrQ"
          />
        </div>
      </div>
      <VTaskMethods
        v-if="getIsShowMethodsBlock"
        :form="form"
        @phase:update="onUpdatePhase"
      />
      <div :class="b('buttons')">
        <VButton
          :params="VButtonParamsCreate"
          :status="status"
          :disabled="getDisabledCreate"
          @click="onTaskCreate"
        />
        <VButton
          :params="VButtonParamsSave"
          :status="status"
          :disabled="getDisabledSave"
          @click="onTaskSave"
        />
        <VButton
          :params="VButtonParamsDelete"
          :status="status"
          :disabled="getDisabledDelete"
          @click="onTaskDelete"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
