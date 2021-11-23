<template>
  <div id="app">
    <div id="nav">
      <div class="description">
        <p>
          Progetti di comprare, costruire o ristrutturare la tua casa? Se cerchi
          un finanziamento e conosci già il prezzo dell’immobile o l’importo dei
          lavori, puoi fare il calcolo della rata del mutuo.
        </p>
        <p>
          Calcola la rata del tuo mutuo online in pochi secondi, ti basta
          inserire:
        </p>
        <ul>
          <li>Il valore dell’immobile</li>
          <li>L’importo del mutuo</li>
          <li>La durata che desideri per il mutuo</li>
        </ul>
        <br />
        <p>
          Con il nostro calcolatore online, stimi anche il mutuo che ottieni a
          partire dalla rata mensile che vuoi spendere, per orientarti con più
          precisione su quale immobile hai la possibilità di acquistare o
          costruire:
        </p>
        <ul>
          <li>Indichi la tua rata ideale del mutuo</li>
          <li>Inserisci il tuo anno di nascita</li>
          <li>Decidi la durata del mutuo</li>
        </ul>
        <b-container>
          <b-row align-h="center">
            <b-col class="pt-3" cols="auto">
              <b-icon-chevron-double-down
                @click="focusQuestions"
              ></b-icon-chevron-double-down>
            </b-col> </b-row
        ></b-container>
      </div>
    </div>
    <router-view id="router-view" />
  </div>
</template>

<script>
import { BIconChevronDoubleDown, BContainer, BCol, BRow } from "bootstrap-vue";
export default {
  components: {
    BIconChevronDoubleDown,
    BContainer,
    BCol,
    BRow,
  },
  methods: {
    focusQuestions() {
      this.$nextTick(function () {
        document
          .querySelector("#router-view")
          .scrollIntoView({ behavior: "smooth" });
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;700&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Outfit", sans-serif;
  /* border: 1px solid rgb(188, 255, 188); */
}

.description {
  position: relative;
  background: #f2f2f2;
  padding: 3rem;
}

.description p {
  margin: 1rem;
}

.description ul {
  margin: 0 2rem;
}

#router-view {
  margin-top: 1.5rem;
}

.pt-3:hover {
  cursor: pointer;
}
</style>
