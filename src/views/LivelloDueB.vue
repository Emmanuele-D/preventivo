<template>
  <b-card>
    <b-row align-h="center">
      <b-row align-h="center">
        <b-col cols="auto">
          <h3>Seleziona la rata mensile</h3>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="1" @click="value--">
          <b-icon-arrow-down-left-circle
            class="arrow-icon"
            font-scale="2.5"
            shift-v="-10"
          ></b-icon-arrow-down-left-circle>
        </b-col>
        <b-col cols="6">
          <input
            class="spin-button"
            type="text"
            @change="checkIfNumber"
            v-model="value"
          />
        </b-col>
        <b-col cols="1" @click="value++">
          <b-icon-arrow-up-right-circle
            class="arrow-icon"
            font-scale="2.5"
            shift-v="-10"
          ></b-icon-arrow-up-right-circle>
        </b-col>
      </b-row>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto" v-if="value < 300">
        <img src="../assets/soldini.svg" alt="" />
      </b-col>
      <b-col cols="auto" v-else-if="value < 700">
        <img src="../assets/soldi.svg" alt="" />
      </b-col>
      <b-col cols="auto" v-else>
        <img src="../assets/soldoni.svg" alt="" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-row align-h="center">
        <b-col cols="12">
          <b-form-input
            id="range-1"
            v-model="value"
            type="range"
            min="100"
            max="1000"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row align-h="between">
        <b-col cols="auto">Min: €100</b-col>
        <b-col cols="auto">Max: €1.000</b-col>
      </b-row>
    </b-row>

    <b-row class="nav-links" align-h="between">
      <b-col cols="auto">
        <router-link class="link" to="/">Indietro</router-link>
      </b-col>
      <b-col cols="auto">
        <router-link class="link link-cta" to="/3b">Avanti</router-link>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCol,
  BRow,
  BCard,
  BFormInput,
  BIconArrowDownLeftCircle,
  BIconArrowUpRightCircle,
} from "bootstrap-vue";
export default {
  components: {
    BCol,
    BRow,
    BCard,
    BFormInput,
    BIconArrowDownLeftCircle,
    BIconArrowUpRightCircle,
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    checkIfNumber() {
      if (!Number(this.value)) {
        this.value = 0;
      }
    },
  },
};
</script>

