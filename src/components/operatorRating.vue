<!--
====== PROPS =====


=== Object ===
users = объект со списком рейтинга операторов

Пример:
users: {
  1: {
    avatar: undefined, - аватарка
    positionInTheList: 1, - позиция в рейтинге
    amountOfMoney: "$8,478.11", - значение
    id: 1, - id оператора
    name: "Sandro", - имя
    surname: "Tavartkiladze", - фамилия
  },
  ...
},
=== /Object ===


=== text ===
title - заголовок карточки (значение String)
=== /text ===


=== background ===
backgroundTabs - фон для элемента v-tabs
backgroundAvatar - фон для элемента operator-rating-list__icon-box, который появляется если у объекта нет аватарки
=== /background ===


=== border ===
borderListItem = цвет для border-bottom у элемента v-list-item
=== border ===


=== color text ===
BaseColor - основной цвета для заголовка компонента, нумерации, имени и фамилии оператора
colorTabActive - цвет для активного элемента v-tab
colorAvatarText - цвет для аватарки, которая появляется если у объекта нет аватарки
ValueRatingColor - цвет значения в рейтинга оператора
=== /color text ===


=== ШАБЛОН ===

<operatorRating
  title=""
  
  backgroundTabs=""
  backgroundAvatar=""

  borderListItem=""

  BaseColor=""
  colorTabActive=""
  colorAvatarText=""
  ValueRatingColor=""
/>

--->

<template>
  <div class="operator-rating rounded-xl" :style="cssProps">
    <h6
      class="text-subtitle-1 font-weight-regular mb-2 mx-4 operator-rating__title"
      :class="BaseColor"
    >
      {{ title }}
    </h6>

    <appTabs
      :ObjTitle="tabs"
      :background="backgroundTabs"
      :colorTabActive="colorTabActive"
      :classVTabs="['rounded-xl', 'align-center', 'mb-3']"
      :classVTab="[
        'rounded-xl',
        'color-white',
        'text-1',
        'font-weight-medium',
        'text-capitalize',
        'ma-1',
        'flex-grow-1',
      ]"
    />

    <!-- <v-tabs
      class="rounded-xl align-center mb-3"
      :class="[backgroundTabs]"
      active-class="tab-item_active"
      slider-color="transparent"
      :height="41"
      :centered="true"
    >
      <v-tab
        v-for="(value, key) in tabs"
        :height="20"
        :key="key"
        class="rounded-xl white--text text-body-2 font-weight-medium text-capitalize ma-1 flex-grow-1"
        >{{ value }}</v-tab
      >
    </v-tabs> -->
    <v-list one-line color="transparent" class="operator-rating-list pa-0">
      <template v-for="user in users">
        <v-list-item :key="user.id" class="operator-rating-list__item">
          <span
            class="operator-rating-list__number text-center px-1"
            :class="BaseColor"
            >{{ user.positionInTheList }}</span
          >
          <v-list-item-avatar
            :color="backgroundAvatar"
            height="50"
            width="50"
            class="operator-rating-list__avatar ma-0"
          >
            <v-img
              :src="require(`../assets/images/operatorRating/${user.avatar}`)"
              alt="avatar"
              v-if="user.avatar"
            />
            <div
              v-else
              class="avatar-box text-body-2 transparent--text"
              :class="colorAvatarText"
            >
              {{ user.name[0] }}{{ user.surname[0] }}
            </div>
          </v-list-item-avatar>
          <span
            class="d-inline-block ml-4 font-weight-medium body-2"
            :class="BaseColor"
            >{{ user.name }} {{ user.surname }}</span
          >
          <span
            class="d-inline-block body-1 ml-auto"
            :class="ValueRatingColor"
            >{{ user.amountOfMoney }}</span
          >
          <template>
            <v-list-item-icon v-if="user.positionInTheList < 4">
              <v-img
                height="20"
                width="17"
                class="mr-1"
                :src="
                  require(`../assets/images/operatorRating/icon-top-${user.positionInTheList}.svg`)
                "
            /></v-list-item-icon>
            <div v-else class="operator-rating-list__icon-box ml-4"></div>
          </template>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
import appTabs from "./app-pattern/app-tabs";

export default {
  name: "operatorRating",
  components: {
    appTabs,
  },
  data: () => ({
    tabs: {
      el_1: "Прошлый",
      el_2: "Текущий месяц",
      el_3: "Сегодня",
    },
  }),

  props: {
    // text
    title: {
      type: String,
      default: "Топ операторов",
    },

    // color
    BaseColor: {
      type: String,
      default: "white--text",
    },
    colorTabActive: {
      type: String,
      default: "#70ae9d",
    },

    // border
    borderListItem: {
      type: String,
      default: "#70ae9d",
    },

    colorAvatarText: {
      type: String,
      default: "teal--text",
    },
    ValueRatingColor: {
      type: String,
      default: "lime--text text--accent-2",
    },

    // background
    backgroundTabs: {
      type: String,
      default: "teal lighten-2",
    },

    backgroundAvatar: {
      type: String,
      default: "teal lighten-5",
    },

    // object users
    users: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    cssProps() {
      return {
        "--color-tab-active": this.colorTabActive,
        "--color-list-item-border": this.borderListItem,
      };
    },
  },
};
</script>

<style lang="scss">
.operator-rating {
  //=== vars ===
  --color-tab-active: #70ae9d;
  --color-list-item-border: rgba(31, 120, 96, 0.4);
  // ===/ vars ===

  &__title {
    letter-spacing: 0.07rem !important;
  }

  // === tabs ===
  .v-tabs-bar {
    background-color: transparent !important;
  }

  .tab-item_active {
    background: #fff;
    color: var(--color-tab-active) !important;
  }
  // === /tabs ===

  // === list ===
  &-list {
    &__item {
      padding: 9px 0 !important;

      &:not(:last-child) {
        border-bottom: 1px solid var(--color-list-item-border);
      }
    }

    &__avatar {
      border-radius: 15px !important;
    }

    &__number {
      width: 39px;
    }

    &__icon-box {
      width: 22px !important;
      height: 20px !important;
    }
  }
  // === /list ===
}
</style>
