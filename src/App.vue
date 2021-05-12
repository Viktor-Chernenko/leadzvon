<template>
  <v-app class="app">
    <v-main>
      <v-container>
        <v-row class="justify-space-around">
          <workingTime />
          <workingTime :strokeShow="true" :strokeWidth="5" donutSize="78%" />
        </v-row>
        <v-row class="justify-space-around my-10">
          <operatorRating :users="usersTest1" />
          <operatorRating
            :users="usersTest2"
            title="Топ операторов по % выкупа"
            backgroundCard="brown lighten-4"
            backgroundTabs="brown lighten-3"
            backgroundAvatar="grey lighten-5"
            borderListItem="rgba(152, 128, 96, 0.4)"
            BaseColor="brown--text text--darken-1"
            colorTabActive="#8a7b67"
            colorAvatarText="brown--text text--lighten-3"
            ValueRatingColor="purple--text text--accent-3"
          />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import workingTime from "./components/workingTime";
import operatorRating from "./components/operatorRating";

export default {
  name: "App",

  components: {
    workingTime,
    operatorRating,
  },

  data: () => ({
    usersTest1: {
      1: {
        avatar: undefined,
        positionInTheList: 1,
        amountOfMoney: "$8,478.11",
        id: 1,
        name: "Sandro",
        surname: "Tavartkiladze",
      },
      2: {
        avatar: "ava-user-2.jpg",
        positionInTheList: 2,
        amountOfMoney: "$3,900.50",
        id: 2,
        name: "Max",
        surname: "Mustermann",
      },
      3: {
        avatar: "ava-user-3.jpg",
        positionInTheList: 3,
        amountOfMoney: "$3,900.50",
        id: 3,
        name: "Marina",
        surname: "Agapova",
      },
      158: {
        avatar: "ava-user-158.jpg",
        positionInTheList: 158,
        amountOfMoney: "$3,900.50",
        id: 158,
        name: "My",
        surname: "Position",
      },
    },
    usersTest2: {
      1: {
        avatar: undefined,
        positionInTheList: 1,
        amountOfMoney: "55%",
        id: 1,
        name: "Sandro",
        surname: "Tavartkiladze",
      },
      2: {
        avatar: "ava-user-2.jpg",
        positionInTheList: 2,
        amountOfMoney: "34%",
        id: 2,
        name: "Max",
        surname: "Mustermann",
      },
      3: {
        avatar: "ava-user-3.jpg",
        positionInTheList: 3,
        amountOfMoney: "25%",
        id: 3,
        name: "Marina",
        surname: "Agapova",
      },
      158: {
        avatar: "ava-user-158.jpg",
        positionInTheList: 158,
        amountOfMoney: "20,5%",
        id: 158,
        name: "My",
        surname: "Position",
      },
    },
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
