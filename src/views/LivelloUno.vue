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

<style scoped>
.card {
  border-radius: 15px;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  border: none;
}

.cards {
  box-shadow: 10px 8px 15px -16px #bed1cb;
  -webkit-box-shadow: 10px 8px 15px -16px #bed1cb;
  -moz-box-shadow: 10px 8px 15px -16px #bed1cb;
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