<!--
====== PROPS =====
background: цвета фона всего элемента appTabs (String)
colorTabActive: цвет текста активного элемента
backgroundTabActive: цвета фона активного элемента

heightVTabs: высота элемента v-tabs (Number)
heightVTab: высота элементов v-tab (Number)

ObjTitle: объект с заголовками v-tab (Object)
  Пример: { tab1: "tab-1", tab2: "tab-2", tab3: "tab-3" }

classVTabs: массив с классами для v-tabs (Array)
classVTab: массив с классами для v-tab (Array)

====== METHODS =====
tabActiveChange = метод передаёт индекс активного v-tab

=== ШАБЛОН ===

<appTabs
  background=""
  colorTabActive=""
  backgroundTabActive=""
  heightVTabs=""
  heightVTab=""
  ObjTitle=""
  classVTabs=""
  classVTab=""
  activeClass=""
  @tabChange="tabActiveChange"
></appTabs>

--->

<template>
  <v-tabs
    @change="tabActiveChange"
    v-model="tabActive"
    :hide-slider="true"
    :show-arrows="false"
    :grow="true"
    class="rounded-xl"
    :class="classVTabs"
    :height="heightVTabs"
    :background-color="background"
  >
    <v-tab
      :style="cssProps"
      v-for="(value, key) in ObjTitle"
      :class="classVTab"
      active-class="tab-active"
      class="text-capitalize flex-shrink-1 rounded-xl my-1 py-1 px-1 font-weight-regular"
      :key="key"
      :height="heightVTab"
      >{{ value }}</v-tab
    >
  </v-tabs>
</template>

<script>
export default {
  name: "app-tabs",

  data: () => ({
    tabActive: 0,
  }),
  props: {
    background: {
      type: String,
      default: "var(--color-1)",
    },
    backgroundTabActive: {
      type: String,
      default: "var(--color-white)",
    },
    colorTabActive: {
      type: String,
      default: "var(--color-black)",
    },
    heightVTabs: {
      type: Number,
      default: 42,
    },
    heightVTab: {
      type: Number,
      default: 5,
    },
    ObjTitle: {
      type: Object,
      default: () => ({ tab1: "tab-1", tab2: "tab-2", tab3: "tab-3" }),
    },
    classVTabs: {
      type: Array,
      default: () => [],
    },
    classVTab: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    tabActiveChange() {
      this.$emit("tabChange", this.tabActive);
    },
  },
  computed: {
    cssProps() {
      return {
        "--color-active-tab": this.colorTabActive,
        "--background-active-tab": this.backgroundTabActive,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-active {
  // vars
  --color-active-tab: #000;
  --background-active-tab: #fff;

  color: var(--color-active-tab) !important;
  background: var(--background-active-tab) !important;
}
</style>
