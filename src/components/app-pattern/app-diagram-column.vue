<template>
  <div class="diagram-column">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "app-diagram-column",
  data: () => ({
    series: [
      {
        name: "Валидные дозвоны",
        data: [44, 55, 41, 67, 22, 43, 20],
      },
      {
        name: "Недозвоны",
        data: [13, 23, 20, 8, 13, 27, 17],
      },
      {
        name: "Апрувы",
        data: [11, 17, 15, 15, 21, 14, 51],
      },
      {
        name: "Отмены",
        data: [21, 7, 25, 13, 22, 8, 13],
      },
      {
        name: "Перезвоны",
        data: [21, 7, 25, 13, 22, 19, 8],
      },
      {
        name: "Спам",
        data: [21, 7, 25, 13, 22, 8, 7],
      },
      {
        name: "Дубли",
        data: [21, 7, 25, 13, 22, 8, 11],
      },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
      },

      colors: [
        "#8025FE",
        "#85C0D2",
        "#9FEFA4",
        "#30D032",
        "#FF0668",
        "#19DABF",
        "#F2C94C",
      ],
      dataLabels: {
        enabled: true,
        offsetY: -2000,
        style: {
          fontSize: "14px",
          colors: ["var(--color-6)"],
        },
        formatter: function (val, opt) {
          const arr = opt.w.globals.series;
          const dataPointIndex = opt.dataPointIndex;
          const seriesIndex = opt.seriesIndex;

          let activeItem;

          arr.forEach((item, index) => {
            let activeElem = item.reduce((acc, element) => {
              acc += element;
              return acc;
            }, 0);

            if (activeElem > 0) {
              activeItem = index;
              return true;
            }
          });

          if (seriesIndex === activeItem) {
            let total = 0;
            arr.forEach((element) => {
              total += element[dataPointIndex];
            });
            return total;
          } else {
            return "";
          }
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: false,
          columnWidth: "23px",
          barHeight: "70%",
          dataLabels: {
            position: "top",
            distributed: true,
            hideOverflowingLabels: false,
          },
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "02.04.2021",
          "03.04.2021",
          "04.04.2021",
          "05.04.2021",
          "06.04.2021",
          "07.04.2021",
          "08.04.2021",
        ],
      },
      yaxis: {
        show: true,
        labels: {
          show: false,
        },
        axisBorder: {
          show: true,
        },
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
      grid: {
        padding: {
          right: 20,
        },
      },
    },
  }),
};
</script>
