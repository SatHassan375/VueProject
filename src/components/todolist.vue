<script setup>
import { reactive, ref } from "vue";
defineProps({
    msg: String,
});
const todoarray = ref([])
const inputval = ref('')
</script>

<template>
    <div class="fieldinput">
        <v-text-field max-width="500px" density="compact" v-model="inputval" label="Another input">
            <template v-slot:append>
                <v-icon color="green" @click="todoarray.push(inputval)">
                    mdi-plus
                </v-icon>
            </template>
        </v-text-field>
    </div>
    <div>
        <ul>
            <template v-if="todoarray.length > 0">
                <li v-for="(item, i) in todoarray" :key="item">{{ item }}
                    <v-icon color="red" @click="todoarray.splice(i, 1)">
                        mdi-delete
                    </v-icon>
                </li>
            </template>
            <template v-else>
                <li>no record found</li>
            </template>
        </ul>
    </div>
</template>

<style scoped>
.fieldinput {
    display: flex;
    justify-content: center;
    align-items: center
}
</style>