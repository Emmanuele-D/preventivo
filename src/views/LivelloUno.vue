<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <b-card-text> Hai gia visto la casa dei tuoi sogni? </b-card-text>
          <router-link to="/2a">Ho gia trovato</router-link>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <b-card-text> Scopri che cosa puoi permetterti </b-card-text>
          <router-link to="/2b">Sto cercando</router-link>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BContainer, BCol, BRow, BCard, BCardText } from "bootstrap-vue";
export default {
  components: {
    BContainer,
    BCol,
    BRow,
    BCard,
    BCardText,
  },
};
</script>