<template>
  <div>
    SELEZIONA RATA MENSILE

    <b-row class="nav-links" align-h="between">
      <b-col cols="auto">
        <router-link class="link" to="/">Indietro</router-link>
      </b-col>
      <b-col cols="auto">
        <router-link class="link link-cta" to="/3b">Avanti</router-link>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
div {
  font-size: 4rem;
  padding: 3rem;
  font-weight: bold;
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

