<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

    <v-card class="pa-4">
      <div class="custom-padding-card">
        <v-btn color="primary" @click="count++"> Button {{ count }} </v-btn>
      </div>
    </v-card>

</template>

<style scoped>
.custom-padding-card {
  padding: 16px;
}
</style>
