<template>
  <form :class="b()" @submit.prevent="">
    <div :class="b('block')">
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsName" />
        <VInput
          :params="VInputParamsName"
          :value="form.Name"
          @change="onChangeName"
        />
      </div>
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsComment" />
        <VInput
          :params="VInputParamsComment"
          :value="getCommentValue"
          @change="onChangeComment"
        />
      </div>
      <div :class="b('group')">
        <VInput
          :params="VInputParamsIsReservoir"
          :value="form.IsReservoir"
          @change="onChangeIsReservoir"
        />
        <VInput
          :params="VInputParamsIsFavorite"
          :value="form.IsFavorite"
          @change="onChangeIsFavorite"
        />
      </div>
    </div>
    <div :class="b('block')">
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsNearestMeteo" />
        <VSelect
          :params="VSelectParamsNearestMeteo"
          :value="getNearestMeteoValue"
          :data="nearestMeteo"
          @select="onSelectNearestMeteo"
          @clear="onClearNearestMeteo"
        />
      </div>
      <div :class="b('group')">
        <VLabel :class="b('label')" :params="VLabelParamsAreaCenterMeteo" />
        <VSelect
          :params="VSelectParamsAreaCenterMeteo"
          :value="getAreaCenterValue"
          :data="areaCenterMeteo"
          @select="onSelectAreaCenterMeteo"
          @clear="onClearAreaCenterMeteo"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
