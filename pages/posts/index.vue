<template>
  <section :class="b()">
    <div :class="b('container')">
      <PostsForm
        :form="form"
        :nearestMeteo="getNearestMeteo"
        :areaCenterMeteo="getAreaCenterMeteo"
        @form:name="onChangeFormName"
        @form:comment="onChangeFormComment"
        @form:is:reservoir="onChangeFormIsReservoir"
        @form:is:favorite="onChangeFormIsFavorite"
        @form:nearest:meteo="onChangeFormNearestMeteo"
        @form:clear:nearest:meteo="onClearFormNearestMeteo"
        @form:area:center:meteo="onChangeFormAreaCenterMeteo"
        @form:clear:area:center:meteo="onClearFormAreaCenterMeteo"
      />
    </div>
  </section>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
