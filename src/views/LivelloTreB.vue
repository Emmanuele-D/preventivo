<template>
  <b-card>
    <b-row align-h="center">
      <b-row align-h="center">
        <b-col cols="auto">
          <h3>Seleziona l'anno di nascita</h3>
        </b-col>
      </b-row>
      <b-col cols="6">
        <b-form-spinbutton
          class="spin-button"
          v-model="value"
          placeholder="value"
          min="1956"
          max="2003"
        >
        </b-form-spinbutton>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <img src="../assets/torta.svg" alt="" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-row align-h="center">
        <b-col cols="12">
          <b-form-input
            id="range-1"
            v-model="value"
            type="range"
            min="1956"
            max="2003"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row align-h="between">
        <b-col cols="auto">Min: 1956</b-col>
        <b-col cols="auto">Max: 2003</b-col>
      </b-row>
    </b-row>

    <b-row class="nav-links" align-h="between">
      <b-col cols="auto">
        <router-link class="link" to="/2b">Indietro</router-link>
      </b-col>
      <b-col cols="auto">
        <router-link class="link link-cta" to="/4b">Avanti</router-link>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BCol, BRow, BCard, BFormInput, BFormSpinbutton } from "bootstrap-vue";
export default {
  components: {
    BCol,
    BRow,
    BCard,
    BFormInput,
    BFormSpinbutton,
  },
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style scoped>
#range-1 {
  width: 100%;
}

.card {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  border: none;
}

.spin-button {
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(204, 204, 204);
  border-radius: 0;
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