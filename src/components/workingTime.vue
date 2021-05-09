<template>
  <v-row>
    <v-col class="working-time pt-5 px-6 pb-10 rounded-xl">
      <h6
        class="text-h6 blue-grey--text text--lighten-1 font-weight-regular mb-2"
      >
        {{ title }}
      </h6>
      <v-tabs
        @change="updateSeriesList"
        :grow="true"
        class="working-time__tabs blue-grey lighten-4 rounded-xl"
        v-model="tabActive"
      >
        <v-tab
          v-for="(value, key) in tabsArr"
          class="text-capitalize subtitle-2 blue-grey--text text--lighten-1 flex-grow-1 rounded-xl ma-1 py-1 font-weight-regular"
          :key="key"
          >{{ value }}</v-tab
        >
      </v-tabs>
      <apexchart
        class="chart-donut pt-9"
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
      tabsArr: {
        today: "Сегодня",
        week: "Неделя",
        month: "Месяц",
      },
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
          show: false,
        },

        plotOptions: {
          pie: {
            expandOnClick: false,
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
                  // color: "#617E8D",
                  // fontSize: "20 px",
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
  max-width: 425px !important;
  width: 100% !important;

  // ==charts==
  .apexcharts-svg {
    overflow: visible !important;
  }

  .chart-donut {
    height: 256px !important;
    max-height: 100% !important;
    min-height: auto !important;
  }

  .apexcharts-legend {
    right: -10px !important;
    bottom: auto !important;

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
  // ==/charts==

  // ==tabs==

  .v-tabs {
    &-bar {
      background: transparent !important;
      height: auto !important;
      padding: 2px !important;
    }

    &-slider {
      display: none !important;
    }

    .v-tab--active {
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(221, 227, 231, 0.5);
      animation: none;
      color: #7a9cad;

      &:hover {
        background: #ffffff;
      }
    }
  }

  .v-tab {
    transition: 0.2s linear;
    animation: none;

    &::before {
      display: none;
    }

    &:hover {
      background: rgb(255, 255, 255, 0.4);
    }
  }

  // ==/tabs==
}
</style>
