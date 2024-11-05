<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col xl="12" md="6">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </v-col>
      <v-col xl="12" md="12">
        <HelloWorld msg="Vite + Vue" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
