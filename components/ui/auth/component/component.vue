<template>
  <form :class="b()" @submit.prevent="">
    <div :class="b('group')">
      <VLabel :class="b('label')" :params="VLabelParamsLogin" />
      <VInput
        :params="VInputParamsLogin"
        :value="user.login"
        @change="onChangeUserLogin"
      />
    </div>
    <div :class="b('group')">
      <VLabel :class="b('label')" :params="VLabelParamsPassword" />
      <VInput
        :params="VInputParamsPassword"
        :value="user.password"
        @change="onChangeUserPassword"
      />
    </div>
    <VButton :params="VButtonParams" :status="status" @click="onAuth" />
  </form>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
