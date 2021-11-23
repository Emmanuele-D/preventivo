<template>
  <b-card>
    <b-card-text>
      <b-row align-h="center">
        <b-col cols="auto">
          <h3>Seleziona la durata del mutuo</h3>
        </b-col>
      </b-row>
    </b-card-text>
    <b-row class="buttons-section" align-h="center">
      <b-col class="item years" cols="auto" v-for="item of items" :key="item">
        <span class="years-number">{{ item.number }}</span>
        <span>anni</span>
      </b-col>
    </b-row>
    <b-row class="nav-links" align-h="between">
      <b-col cols="auto">
        <router-link class="link" to="/3b">Indietro</router-link>
      </b-col>
      <b-col cols="auto">
        <router-link class="link link-cta" to="/5">Avanti</router-link>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BCard, BCardText, BRow, BCol } from "bootstrap-vue";
export default {
  components: {
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

