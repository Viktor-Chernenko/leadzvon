<template>
  <v-app class="app">
    <v-main>
      <v-container :fluid="true" class="wrap">
        <div class="d-flex align-stretch mb-10">
          <app-card
            border="1px dashed #a3b9c4"
            padding="19px 26px"
            minWidth="420px"
            class="mr-10"
          >
            <workingTime
              :strokeShow="true"
              :strokeWidth="4"
              donutSize="78%"
              :pieCustomScale="1.7"
            />
          </app-card>
          <div class="d-flex flex-grow-1">
            <app-card
              class="mr-3"
              padding="19px 12px"
              background="var(--color-2)"
              width="33%"
            >
              <operatorRating :users="usersTest1">
                <template v-slot:title>
                  Топ операторов по Среднему чеку
                </template>
              </operatorRating>
            </app-card>
            <app-card
              class="mr-3"
              padding="19px 12px"
              background="var(--color-3)"
              width="33%"
            >
              <operatorRating
                :users="usersTest2"
                backgroundTabs="brown lighten-3"
                backgroundAvatar="grey lighten-5"
                borderListItem="rgba(152, 128, 96, 0.4)"
                BaseColor="brown--text text--darken-1"
                colorTabActive="#8a7b67"
                colorAvatarText="brown--text text--lighten-3"
                ValueRatingColor="purple--text text--accent-3"
                ><template v-slot:title>
                  Топ операторов по % выкупа
                </template></operatorRating
              >
            </app-card>
            <app-card
              class=""
              padding="19px 12px"
              background="var(--color-4)"
              width="33%"
            >
              <operatorRating
                :users="usersTest2"
                backgroundTabs="brown lighten-3"
                backgroundAvatar="grey lighten-5"
                borderListItem="rgba(152, 128, 96, 0.4)"
                BaseColor="brown--text text--darken-1"
                colorTabActive="#8a7b67"
                colorAvatarText="brown--text text--lighten-3"
                ValueRatingColor="purple--text text--accent-3"
                ><template v-slot:title>
                  Топ операторов по % выкупа
                </template></operatorRating
              >
            </app-card>
          </div>
        </div>
        <v-row>
          <v-col cols="6">
            <app-card padding="20px 25px" background="var(--color-white)">
              <leadsProcessing />
            </app-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import appCard from "./components/app-pattern/app-card";
import workingTime from "./components/workingTime";
import operatorRating from "./components/operatorRating";
import leadsProcessing from "./components/leadsProcessing";

export default {
  name: "App",

  components: {
    workingTime,
    operatorRating,
    appCard,
    leadsProcessing,
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

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap");
html,
body,
* {
  font-family: "Nunito Sans", sans-serif !important;
}

#app.v-application {
  background: #e5ecf0;
}

#app {
  max-width: 100%;
}

.wrap {
  max-width: 1670px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
