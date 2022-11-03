<template>
  <div :class="b()">
    <StationsWorkTable
      :data="stations"
      :form="form"
      @station="onChangeStation"
      @station:clear="onClearStation"
    />
    <StationsWorkForm
      :form="form"
      :nearestMeteo="nearestMeteo"
      :areaCenterMeteo="areaCenterMeteo"
      :status="status"
      @form:name="onChangeFormName"
      @form:comment="onChangeFormComment"
      @form:is:reservoir="onChangeFormIsReservoir"
      @form:is:favorite="onChangeFormIsFavorite"
      @form:nearest:meteo="onChangeFormNearestMeteo"
      @form:clear:nearest:meteo="onClearFormNearestMeteo"
      @form:area:center:meteo="onChangeFormAreaCenterMeteo"
      @form:clear:area:center:meteo="onClearFormAreaCenterMeteo"
      @station:save="onSaveStation"
      @station:remove="onRemoveStation"
    />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
