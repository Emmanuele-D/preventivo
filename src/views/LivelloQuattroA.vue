<template>
  <b-container>
    <b-card>
      <b-card-text>
        <b-row align-h="center">
          <b-col cols="auto">Seleziona la durata del mutuo </b-col>
        </b-row>
      </b-card-text>
      <b-row class="buttons-section" align-h="between">
        <b-col class="item" cols="auto" v-for="item of items" :key="item">
          <span>{{ item.number }}</span>
          anni
        </b-col>
      </b-row>
      <b-row class="nav-links" align-h="between">
        <b-col cols="auto">
          <router-link class="link" to="/3a">Indietro</router-link>
        </b-col>
        <b-col cols="auto">
          <router-link class="link link-cta" to="/5">Avanti</router-link>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import { BContainer, BCard, BCardText, BRow, BCol } from "bootstrap-vue";
export default {
  components: {
    BContainer,
    BCard,
    BCardText,
    BRow,
    BCol,
  },
  data() {
    return {
      items: [
        { number: 10 },
        { number: 15 },
        { number: 20 },
        { number: 25 },
        { number: 30 },
      ],
    };
  },
};
</script>

<style scoped>
span {
  font-size: 2rem;
  font-weight: bold;
}

.buttons-section {
  margin: auto;
  width: 80%;
}

.item {
  padding: 0.5rem 2rem;
  color: aliceblue;
  background: #00b97f;
  border-radius: 500px;
}

.item:hover,
.item:active,
.item::selection {
  cursor: pointer;
  background: #ea862c;
}

.nav-links {
  margin-top: 1rem;
}

.link {
  cursor: pointer;
  color: black;
  text-decoration: none;
}

.link-cta {
  padding: 0.5rem 1rem;
  color: white;
  background: #00b97f;
  border-radius: 500px;
}

.link-cta:hover {
  background: #ea862c;
}
</style>