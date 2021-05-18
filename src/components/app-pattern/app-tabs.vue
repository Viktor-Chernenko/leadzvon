<!--
====== PROPS =====
background: цвета фона всего элемента appTabs (String)
colorTabActive: цвет текста активного элемента
backgroundTabActive: цвета фона активного элемента

heightVTabs: высота элемента v-tabs (Number)
heightVTab: высота элементов v-tab (Number)

tabs: массив с заголовками v-tab (Array)
  Пример: [{ title: "tab1" }, { title: "tab2" }, { title: "tab3" }]

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
  tabs=""
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
    :grow="true"
    class="rounded-xl"
    :height="heightVTabs"
    :background-color="background"
  >
    <v-tab
      :style="cssProps"
      v-for="(tab, index) in tabs"
      :class="classVTab"
      active-class="tab-active"
      class="text-capitalize flex-shrink-1 rounded-xl ma-1 py-1 px-1 font-weight-regular tab-elem"
      :key="index"
      :height="heightVTab"
      >{{ tab.title }}</v-tab
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
    tabs: {
      type: Array,
      default: () => [{ title: "tab1" }, { title: "tab2" }, { title: "tab3" }],
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

.tab-elem {
  min-width: 0 !important;
}
</style>
