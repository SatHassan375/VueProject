<script setup>
import { ref } from "vue";
const inputData = ref([
    { type: 'text', label: "User Name", inputName: "Name" },
    { type: 'number', label: "Phone Number", inputName: "Phone" },
    { type: 'text', label: "User Address", inputName: "Address" },
    { type: 'number', label: "Amount", inputName: "Amount" },
])
const formData = ref({})
inputData.value.forEach((item) => {
    formData.value[item.inputName] = "";
});
const funData = () => {
    console.log(formData.value)
}
</script>
<template>
    {{ formData }}
    <v-sheet class="d-flex flex-wrap bg-surface-variant">
        <template v-for="(item, i) in inputData">
            <v-sheet class="ma-2 pa-2 flex-1-1-100">
                <v-text-field :key="i" v-model="formData[item.inputName]" variant="outlined" :type="item.type"
                    :label="item.label"></v-text-field>
            </v-sheet>
        </template>
        <v-sheet class="ma-2 pa-2 flex-1-1-100">
            <v-select v-model="formData.selection" label="Select" variant="outlined"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
        </v-sheet>
        <v-sheet class="ma-2 pa-2 flex-1-1-100">
            <v-btn color="indigo-darken-3" variant="flat" block @click="funData">Sumbit</v-btn>
        </v-sheet>
    </v-sheet>
</template>
<style scoped></style>