<template>
  <div class="working-time">
    <h6
      class="text-h6 blue-grey--text text--lighten-1 font-weight-regular mb-2"
    >
      {{ title }}
    </h6>
    <appTabs
      :changeMethod="updateSeriesList"
      :ObjTitle="tabsArr"
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
      tabsArr: {
        today: "Сегодня",
        week: "Неделя",
        month: "Месяц",
        selectDate: "Выбрать период",
      },

      title: "Время работы",
      workingTimeList: {
        value: {
          active: [100, 160, 110, 113, 133, 110, 162],
          today: [200, 224, 10, 13, 33, 10, 62],
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
          "#30D032",
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
                  show: false,
                  // color: "#617E8D",
                  // fontSize: "20 px",
                },
                value: {
                  color: "#617E8D",
                  fontSize: "20px",
                  formatter: function (val) {
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
                total: {
                  showAlways: true,
                  fontSize: "20px",
                  show: true,
                  label: false,
                  formatter: function (w) {
                    const val = w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0);

                    if (val > 59) {
                      const min = val % 60;
                      const hour = Math.floor(val / 60);
                      return `${hour} ч. ${min} мин.`;
                    }

                    return `${val} мин.`;
                  },
                },
              },
            },
          },
        },

        dataLabels: {
          enabled: true,
          style: {
            fontSize: "10px",
            fontWeight: "bold",
          },
        },
      },
    };
  },
  methods: {
    updateSeriesList() {
      console.log(this.tabActive);
      let activeTab;
      if (this.tabActive === 0) activeTab = "today";
      if (this.tabActive === 1) activeTab = "week";
      if (this.tabActive === 2) activeTab = "month";
      if (this.tabActive === 3) activeTab = "period";

      this.workingTimeList.value.active = this.workingTimeList.value[activeTab];
    },

    tabActiveChange(value) {
      this.tabActive = value;
      this.updateSeriesList();
    },
  },
};
</script>
