<template>
  <v-row>
    <v-col class="working-time">
      <h4 class="working-time__title">{{ title }}</h4>
      <v-tabs
        @change="updateSeriesList"
        class="working-time__tabs"
        v-model="tabActive"
      >
        <v-tab class="text-capitalize" key="today">Сегодня</v-tab>
        <v-tab class="text-capitalize" key="week">Неделя</v-tab>
        <v-tab class="text-capitalize" key="month">Месяц</v-tab>
      </v-tabs>
      <apexchart
        class="chart-donut"
        type="donut"
        :options="workingTimeList"
        :series="workingTimeList.value.active"
      ></apexchart>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "workingTime",
  data() {
    return {
      tabActive: 0,
      title: "Время работы",
      workingTimeList: {
        value: {
          active: [200, 60, 10, 13, 33, 10, 62],
          today: [200, 24, 10, 13, 33, 10, 62],
          week: [20, 42, 21, 87, 64, 10, 8],
          month: [20, 20, 10, 6, 10, 10, 10],
        },
        labels: [
          "Тотал в системе",
          "Поиск задачи",
          "Гудки",
          "Разговоры",
          "Постобработка",
          "Перерыв",
          "Обучение",
        ],
        colors: [
          "#87DA8C",
          "#8025FE",
          "#85C0D2",
          "#30D032",
          "#FF0668",
          "#F2C94C",
          "#2278CE",
        ],
        stroke: {
          lineCap: "round",
        },

        plotOptions: {
          pie: {
            offsetX: 5,
            offsetY: 40,
            customScale: 1.5,
            donut: {
              size: "83%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: false,
                  color: "#617E8D",
                  fontSize: "20 px",
                },
                value: {
                  color: "#617E8D",
                  fontSize: "20 px",
                  formatter: function (val) {
                    if (val > 59) {
                      const min = val % 60;
                      const hour = Math.floor(val / 60);
                      if (min) {
                        return `${hour} час. ${min} мин.`;
                      }
                      return `${hour} час.`;
                    }

                    return `${val} мин.`;
                  },
                },
                total: {
                  showAlways: true,
                  fontSize: "20 px",
                  show: true,
                  label: "",
                  formatter: function (w) {
                    const val = w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);

                    if (val > 59) {
                      const min = val % 60;
                      const hour = Math.floor(val / 60);
                      return `${hour} час. ${min} мин.`;
                    }

                    return `${val} мин.`;
                  },
                },
              },
            },
          },
        },

        dataLabels: {
          enabled: false,
        },
      },
    };
  },
  methods: {
    updateSeriesList() {
      let activeTab;
      if (this.tabActive === 0) activeTab = "today";
      if (this.tabActive === 1) activeTab = "week";
      if (this.tabActive === 2) activeTab = "month";
      this.workingTimeList.value.active = this.workingTimeList.value[activeTab];
    },
  },
};
</script>

<style lang="scss">
.working-time {
  border: 1px dashed #a3b9c4;
  border-radius: 24px;
  padding: 19px 26px !important;
  max-width: 425px !important;
  width: 100% !important;

  .apexcharts-svg {
    overflow: visible !important;
  }

  &__title {
    font-size: 20px;
    color: #617e8d;
    margin-bottom: 10px;
  }

  // tabs

  .v-tabs {
    &-bar {
      background: rgba(167, 195, 208, 0.45) !important;
      border-radius: 20px;
      height: auto;
      padding: 3px 0;
    }

    &-items {
      background: transparent !important;
      padding-top: 35px;
      overflow: visible !important;
    }

    &-slider {
      display: none !important;
    }
  }

  .cdc-overlay {
    background: #e5ecf0 !important;
  }

  .v-slide-group__content {
    width: 100%;
  }

  .v-tab {
    flex-grow: 1;
    padding: 6px 16px;
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

  .v-tabs .v-tab--active {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(221, 227, 231, 0.5);
    animation: none;
    color: #7a9cad;

    &:hover {
      background: #ffffff;
    }
  }
}

// charts

.chart-donut {
  padding-top: 35px;
}

.apexcharts-legend {
  right: -10px !important;

  &-marker {
    width: 14px !important;
    height: 14px !important;
    margin-right: 20px !important;
  }

  &-series {
    display: flex;
    align-items: center;
    margin-bottom: 7px !important;
  }

  &-text {
    font-size: 14px !important;
  }
}
</style>
