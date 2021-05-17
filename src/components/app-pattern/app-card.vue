<!--
====== PROPS =====
background - цвет фона карточки
border - бордер карточки
padding - внутренние отступы карточки
height - высота карточки
=== ШАБЛОН ===

<app-card
  background=""
  border=""
  padding=""
  height=""
>
</app-card>

--->

<template>
  <div class="app-card" :style="cssProps">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "appCard",

  props: {
    background: {
      type: String,
      default: "transparent",
    },
    border: {
      type: String,
      default: "none",
    },
    padding: {
      type: String,
      default: "0px",
    },
    height: {
      type: String,
      default: "auto",
    },
  },

  computed: {
    cssProps() {
      return {
        "--padding-card": this.padding,
        "--border-card": this.border,
        "--background-card": this.background,
        "--height-card": this.height,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.app-card {
  //===vars===
  --border-card: none;
  --padding-card: 0px;
  --background-card: transparent;
  --height-card: auto;
  //===/vars===

  border-radius: 24px !important;
  box-shadow: none !important;
  border: var(--border-card) !important;
  padding: var(--padding-card) !important;
  height: var(--height-card) !important;
  background: var(--background-card) !important;
}
</style>
