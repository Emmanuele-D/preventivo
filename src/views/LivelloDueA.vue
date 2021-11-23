<template>
  <b-card>
    <b-row align-h="center">
      <b-row align-h="center">
        <b-col cols="auto">
          <h3>Seleziona il valore dell'immobile</h3>
        </b-col>
      </b-row>
      <b-col cols="6">
        <b-form-spinbutton
          class="spin-button"
          v-model="value"
          placeholder="value"
          min="40000"
          max="500000"
        >
        </b-form-spinbutton>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto" v-if="value < 190000">
        <img src="../assets/casina.svg" alt="" />
      </b-col>
      <b-col cols="auto" v-else-if="value < 340000">
        <img src="../assets/casa.svg" alt="" />
      </b-col>
      <b-col cols="auto" v-else>
        <img src="../assets/casona.svg" alt="" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-row align-h="center">
        <b-col cols="12">
          <b-form-input
            id="range-1"
            v-model="value"
            type="range"
            min="40000"
            max="500000"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row align-h="between">
        <b-col cols="auto">Min: €40.000</b-col>
        <b-col cols="auto">Max: €500.000</b-col>
      </b-row>
    </b-row>

    <b-row class="nav-links" align-h="between">
      <b-col cols="auto">
        <router-link class="link" to="/">Indietro</router-link>
      </b-col>
      <b-col cols="auto">
        <router-link class="link link-cta" to="/3a">Avanti</router-link>
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