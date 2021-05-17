<template>
  <div>
    <v-row class="d-flex align-center">
      <v-col cols="4">
        <h6 class="text-3 font-weight-regular color-7">
          {{ title }}
        </h6>
      </v-col>
      <v-col cols="8">
        <app-tabs
          :ObjTitle="tabs"
          class="ml-a"
          background="#E9EFF2"
          colorTabActive="var(--color-6)"
          :classVTab="['color-6']"
        ></app-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="diagram"></v-col>
    </v-row>
  </div>
</template>

<script>
import appTabs from "./app-pattern/app-tabs";

export default {
  name: "leadsProcessing",
  components: {
    appTabs,
  },
  data: function () {
    return {
      title: "Обработка лидов",
      tabs: {
        tab1: "05.05.2021 - 08.05.2021",
        tab2: "Сегодня",
        tab3: "Неделя",
        tab4: "Месяц",
      },
    };
  },
};
</script>
