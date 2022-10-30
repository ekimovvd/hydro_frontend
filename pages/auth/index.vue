<template>
  <section class="auth">
    <div :class="b('form')">
      <VLogo :class="b('logo')" :params="VLogoParams" />
      <AuthForm />
    </div>
  </section>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
