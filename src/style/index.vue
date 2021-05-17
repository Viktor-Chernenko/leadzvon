<style lang="scss">
// === vars ===
:root {
  // color
  --color-1: #c9d9e2;
  --color-2: #8bc4b4;
  --color-3: #efdfc8;
  --color-4: #eedcdc;
  --color-5: #e5ecf0;
  --color-6: #7a9cad;

  --color-white: #fff;
  --color-black: #000;

  // font-size
  --text-1: 14px;
  --text-2: 12px;
}
// === /vars ===

// === class ===

// == text ==

.text-1 {
  font-size: var(--text-1) !important;
}

.text-2 {
  font-size: var(--text-2) !important;
}
// == / text ==

// == color ==
.color-white {
  color: var(--color-white) !important;
}

.color-black {
  color: var(--color-black) !important;
}

.color-1 {
  color: var(--color-1) !important;
}

.color-2 {
  color: var(--color-2) !important;
}

.color-3 {
  color: var(--color-3) !important;
}

.color-4 {
  color: var(--color-4) !important;
}

.color-5 {
  color: var(--color-5) !important;
}

.color-6 {
  color: var(--color-6) !important;
}
// == /color ==

// === working-time ===
.working-time {
  // ==charts==
  .apexcharts-svg {
    overflow: visible !important;
  }

  .apexcharts-datalabels-group {
    position: absolute !important;
    top: 50% !important;
    transform: none !important;
  }

  .apexcharts-series {
    path {
      filter: none !important;
    }
  }

  foreignObject {
    overflow: visible !important;
  }

  .chart-donut {
    height: 256px !important;
    max-height: 100% !important;
    min-height: auto !important;
  }

  .apexcharts-legend {
    top: 35px !important;
    right: -30px !important;
    bottom: auto !important;

    &-marker {
      width: 14px !important;
      height: 14px !important;
      margin-right: 10px !important;
    }

    &-series {
      display: flex;
      align-items: center;
      margin-bottom: 5px !important;
    }

    &-text {
      font-size: 14px !important;
    }
  }
  // ==/charts==
}
// === /working-time ===
</style>
