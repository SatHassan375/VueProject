<script setup>
import { reactive, ref } from "vue";
defineProps({
  msg: String,
});

const isActive = ref(false)
const show = ref(false)

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})
const fun = () => {
  obj.value.nested.count += 1;
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="show = !show">Show/Hide</button>
  <template v-if="show">
    <v-card class="pa-4">
      <div :class="isActive ? 'active' : 'text-danger'">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod consequuntur iure?
      </div>
      <div class="custom-padding-card">
        <v-btn color="primary" @click="fun"> Button {{ obj.nested.count }} </v-btn>
      </div>
      <ul>
        <li v-for="item in obj.arr">{{ item }}</li>
      </ul>
    </v-card>
  </template>
  <template v-else>
    <span class="text-danger">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus expedita eos quas.
    </span>
  </template>
</template>

<style scoped>
.custom-padding-card {
  padding: 16px;
}

.active {
  padding: 20px;
  color: rgb(43, 209, 43);
}

.text-danger {
  padding: 20px;
  color: red;
}
</style>
