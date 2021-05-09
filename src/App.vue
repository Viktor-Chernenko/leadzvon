<template>
  <v-app class="app">
    <v-main>
      <v-container>
        <workingTime />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import workingTime from "./components/workingTime";

export default {
  name: "App",

  components: {
    workingTime,
  },

  data: () => ({
    test: "test",
  }),
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap");

html,
body {
  font-family: "Nunito Sans", sans-serif;
}

#app {
  font-family: "Nunito Sans", sans-serif;

  &.v-application {
    background: #e5ecf0;
  }
}

.app {
  padding: 40px;
}
</style>
