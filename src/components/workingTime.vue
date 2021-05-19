<template>
  <div class="working-time">
    <h6
      class="text-h6 blue-grey--text text--lighten-1 font-weight-regular mb-2"
    >
      {{ title }}
    </h6>
    <appTabs
      :changeMethod="updateSeriesList"
      :tabs="tabs"
      @tabChange="tabActiveChange"
      :classVTab="['text-2', 'color-6']"
      colorTabActive="var(--color-6)"
    ></appTabs>
    <apexchart
      class="chart-donut pt-9"
      type="donut"
      :options="workingTimeList"
      :series="workingTimeList.value.active"
    ></apexchart>
  </div>
</template>
<script>
import appTabs from "./app-pattern/app-tabs";

export default {
  name: "workingTime",
  components: {
    appTabs,
  },
  props: {
    strokeShow: {
      type: [String, Boolean],
      default: false,
    },
    strokeWidth: {
      type: Number,
      default: 5,
    },
    strokeColors: {
      type: String,
      default: "var(--color-5)",
    },
    donutSize: {
      type: String,
      default: "83%",
    },
    pieCustomScale: {
      type: Number,
      default: 1.5,
    },
  },
  data() {
    return {
      tabActive: 0,
      tabs: [
        { title: "Сегодня" },
        { title: "Неделя" },
        { title: "Месяц" },
        { title: "Выбрать период" },
      ],

      title: "Время работы",
      workingTimeList: {
        value: {
          active: [10, 16, 11, 11, 13, 11, 16],
          today: [20, 22, 10, 13, 33, 10, 62],
          week: [20, 42, 21, 87, 64, 10, 8],
          month: [20, 20, 10, 6, 10, 10, 10],
          period: [40, 20, 10, 6, 10, 10, 10],
        },
        labels: [
          "Время в кабинете",
          "Поиск задачи",
          "Гудки",
          "Разговоры",
          "Постобработка",
          "Перерыв",
          "Обучение",
        ],
        colors: [
          "#00BCD4",
          "#8025FE",
          "#85C0D2",
          "#1CA11E",
          "#FF0668",
          "#F2C94C",
          "#2278CE",
        ],
        stroke: {
          show: this.strokeShow,
          width: this.strokeWidth,
          colors: this.strokeColors,
          opacity: 0,
        },

        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     options: {
        //       plotOptions: {
        //         pie: {
        //           customScale: 1.5,
        //         },
        //       },
        //     },
        //   },
        // ],

        tooltip: {
          enabled: true,
          y: {
            formatter: (val) => {
              if (val > 59) {
                const min = val % 60;
                const hour = Math.floor(val / 60);
                if (min) {
                  return `${hour} ч. ${min} мин.`;
                }
                return `${hour} ч.`;
              }

              return `${val} мин.`;
            },
          },
        },

        plotOptions: {
          pie: {
            expandOnClick: true,
            offsetX: 5,
            offsetY: 40,
            customScale: this.pieCustomScale,
            donut: {
              size: this.donutSize,
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  offsetY: 0,
                  color: "#617E8D",
                  formatter: function (value, bool, w) {
                    const listTitle = w.globals.seriesNames;
                    const listSeries = w.globals.series;
                    let index = [];

                    index = listTitle.reduce(function (acc, elem, index) {
                      if (elem === value) {
                        acc.push(index);
                      }
                      return acc;
                    }, []);

                    if (index.length > 0) {
                      let val = listSeries[index];

                      if (val > 59) {
                        const min = val % 60;
                        const hour = Math.floor(val / 60);
                        return `${hour} ч. ${min} мин. 
                      `;
                      }

                      return `${val} мин.`;
                    } else {
                      const val = w.globals.seriesTotals.reduce((a, b) => {
                        return a + b;
                      }, 0);

                      if (val > 59) {
                        const min = val % 60;
                        const hour = Math.floor(val / 60);
                        return `${hour} ч. ${min} мин. 
                      `;
                      }

                      return `${val} мин.`;
                    }
                  },
                  fontSize: "14px",
                },
                value: {
                  color: "#617E8D",
                  fontSize: "12px",
                  offsetY: -1,
                  formatter: function (val, w) {
                    const listSeries = w.globals.series;
                    let index = [];

                    index = listSeries.reduce(function (acc, elem, index) {
                      if (elem == val) {
                        acc.push(index);
                      }
                      return acc;
                    }, []);

                    const percent = w.globals.seriesPercent[index[0]];
                    return `${Math.round(percent)}%`;
                  },
                },
                total: {
                  showAlways: true,
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#617E8D",
                  show: true,
                  label: "Total",
                  formatter: function (w) {
                    const percent = w.globals.seriesPercent.reduce(
                      (acc, item) => {
                        acc += +item;
                        return acc;
                      },
                      0
                    );

                    return `${Math.round(percent)}%`;
                  },
                },
              },
            },
            dataLabels: {
              offset: -17,
              minAngleToShowLabel: 20,
            },
          },
        },

        dataLabels: {
          style: {
            fontSize: "7px",
            fontWeight: "bold",
            colors: [
              "#00BCD4",
              "#8025FE",
              "#85C0D2",
              "#1CA11E",
              "#FF0668",
              "#F2C94C",
              "#2278CE",
            ],
          },

          formatter: function (val) {
            return `${Math.round(val)}%`;
          },
          dropShadow: {
            enabled: false,
          },
        },
      },
    };
  },
  methods: {
    updateSeriesList() {
      let activeTab;
      switch (this.tabActive) {
        case 0:
          activeTab = "today";
          break;
        case 1:
          activeTab = "week";
          break;
        case 2:
          activeTab = "month";
          break;
        case 3:
          activeTab = "period";
          break;
        default:
          activeTab = "today";
      }

      this.workingTimeList.value.active = this.workingTimeList.value[activeTab];
    },

    tabActiveChange(value) {
      this.tabActive = value;
      this.updateSeriesList();
    },
  },
};
</script>
