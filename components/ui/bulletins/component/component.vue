<template>
  <section :class="b()">
    <BulletinsWrapperTable />
    <div :class="b('group')">
      <BulletinsWrapperForm />
      <BulletinsWrapperStations />
    </div>
  </section>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
