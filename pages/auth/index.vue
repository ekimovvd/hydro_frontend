<template>
  <section class="auth">
    <div :class="b('form')">
      <VLogo :class="b('logo')" :params="VLogoParams" />
      <AuthForm
        :status="status"
        @change:status:loading="onChangeStatusLoading"
        @change:status:default="onChangeStatusDefault"
      />
    </div>
  </section>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
