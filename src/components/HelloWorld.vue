<script setup>
import { ref } from "vue";
defineProps({
  msg: String,
});

let count = ref(0);

const fun = () => {
  count.value += 1;
  arr.push(count)
}
const arr = [1, 2, 3, 4, 5]
</script>

<template>
  <h1>{{ msg }}</h1>

  <v-card class="pa-4">
    <div class="custom-padding-card">
      <v-btn color="primary" @click="fun"> Button {{ count }} </v-btn>
    </div>
    <ul>
      <li v-for="item in arr">{{ item }}</li>
    </ul>
  </v-card>
</template>

<style scoped>
.custom-padding-card {
  padding: 16px;
}
</style>
