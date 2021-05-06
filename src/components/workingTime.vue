<template>
  <v-row>
    <v-col cols="3" class="working-time">
      <h4 class="working-time__title">{{ title }}</h4>
      <v-tabs v-model="tabActive" class="working-time__tabs">
        <v-tab class="text-capitalize" key="today">Сегодня</v-tab>
        <v-tab class="text-capitalize" key="week">Неделя</v-tab>
        <v-tab class="text-capitalize" key="month">Месяц</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabActive">
        <v-tab-item key="today" :transition="false">
          <vc-donut
            background="white"
            foreground="grey"
            :size="53"
            unit="%"
            :thickness="15"
            has-legend
            legend-placement="right"
            :sections="workingTimeList.today"
            :total="100"
            :start-angle="0"
            :auto-adjust-text-size="true"
          >
            <h5 class="font-weight-bold">{{ total }} %</h5>
          </vc-donut>
        </v-tab-item>
        <v-tab-item key="week" :transition="false">
          <vc-donut
            background="white"
            foreground="grey"
            :size="53"
            unit="%"
            :thickness="15"
            has-legend
            legend-placement="right"
            :sections="workingTimeList.week"
            :total="100"
            :start-angle="0"
            :auto-adjust-text-size="true"
          >
            <h5 class="font-weight-bold">{{ total }} %</h5>
          </vc-donut>
        </v-tab-item>
        <v-tab-item key="month" :transition="false">
          <vc-donut
            background="white"
            foreground="grey"
            :size="53"
            unit="%"
            :thickness="15"
            has-legend
            legend-placement="right"
            :sections="workingTimeList.month"
            :total="100"
            :start-angle="0"
            :auto-adjust-text-size="true"
          >
            <h5 class="font-weight-bold">{{ total }} %</h5>
          </vc-donut>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "workingTime",
  data() {
    return {
      title: "Время работы",
      tabActive: "today",
      workingTimeList: {
        today: [
          { label: "Тотал в системе", value: 20, color: "#87DA8C" },
          { label: "Поиск задачи", value: 20, color: "#8025FE" },
          { label: "Гудки", value: 10, color: "#85C0D2" },
          { label: "Разговоры", value: 10, color: "#30D032" },
          { label: "Постобработка", value: 20, color: "#FF0668" },
          { label: "Перерыв", value: 10, color: "#F2C94C" },
          { label: "Обучение", value: 10, color: "#2278CE" },
        ],
        week: [
          { label: "Тотал в системе", value: 40, color: "#87DA8C" },
          { label: "Поиск задачи", value: 10, color: "#8025FE" },
          { label: "Гудки", value: 10, color: "#85C0D2" },
          { label: "Разговоры", value: 10, color: "#30D032" },
          { label: "Постобработка", value: 10, color: "#FF0668" },
          { label: "Перерыв", value: 10, color: "#F2C94C" },
          { label: "Обучение", value: 10, color: "#2278CE" },
        ],
        month: [
          { label: "Тотал в системе", value: 10, color: "#87DA8C" },
          { label: "Поиск задачи", value: 10, color: "#8025FE" },
          { label: "Гудки", value: 10, color: "#85C0D2" },
          { label: "Разговоры", value: 10, color: "#30D032" },
          { label: "Постобработка", value: 10, color: "#FF0668" },
          { label: "Перерыв", value: 20, color: "#F2C94C" },
          { label: "Обучение", value: 30, color: "#2278CE" },
        ],
      },
    };
  },
  computed: {
    total() {
      const total = this.workingTimeList.today.reduce((acc, item) => {
        acc += item.value;
        return acc;
      }, 0);

      return total;
    },
  },
};
</script>

<style lang="scss">
.working-time {
  border: 1px dashed #a3b9c4;
  border-radius: 24px;
  padding: 19px 26px !important;

  h5 {
    color: #617e8d;
    font-size: 20px;
  }

  &__title {
    font-size: 20px;
    color: #617e8d;
    margin-bottom: 10px;
  }

  &__tabs {
    margin-bottom: 45px;

    .v-tabs-bar {
      background: rgba(167, 195, 208, 0.45) !important;
      border-radius: 20px;
    }
  }

  .v-tabs-items {
    background: transparent !important;
  }

  .cdc-overlay {
    background: #e5ecf0 !important;
  }

  .v-slide-group__content {
    width: 100%;
  }

  .v-tab {
    flex-grow: 1;
    margin: 5px;
    border-radius: 20px;
    transition: 0.2s linear;
    animation: none;

    &::before {
      display: none;
    }

    &:hover {
      background: rgb(255, 255, 255, 0.4);
    }
  }

  .v-tabs-slider {
    display: none !important;
  }

  .v-tab--active {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(221, 227, 231, 0.5);
    animation: none;

    &:hover {
      background: #ffffff;
    }
  }
}

.cdc-legend-item {
  margin: 0 !important;
  line-height: 25px;

  span {
    font-size: 14px;
    color: #000;
  }

  &-color {
    width: 14px !important;
    height: 14px !important;
    border-radius: 100% !important;
    margin-right: 20px !important;
  }
}

.cdc-legend {
  margin-left: 15px !important;
}
</style>
