<template>
  <b-card>
    <b-row>
      <b-col>
        <b-card class="cards">
          <b-card-text> Hai gia visto la casa dei tuoi sogni? </b-card-text>
          <b-col cols="auto">
            <router-link class="link link-cta" to="/2a"
              >Ho gia trovato</router-link
            >
          </b-col>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="cards">
          <b-card-text> Scopri che cosa puoi permetterti </b-card-text>
          <b-col cols="auto">
            <router-link class="link link-cta" to="/2b"
              >Sto cercando</router-link
            >
          </b-col>
        </b-card>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BCol, BRow, BCard, BCardText } from "bootstrap-vue";
export default {
  components: {
    BCol,
    BRow,
    BCard,
    BCardText,
  },
};
</script>