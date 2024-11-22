
<template>
     <router-view />
   <v-container>
  <v-row no-gutters>
    <!-- First column takes 2 columns -->
    <v-col cols="2">
      <v-sheet class="ma-2 pa-2">
        First column
      </v-sheet>
    </v-col>

    <!-- Second column takes 5 columns -->
    <v-col cols="5">
      <v-sheet class="ma-2 pa-2">
        Second column
      </v-sheet>
    </v-col>

    <!-- Third column takes 5 columns -->
    <v-col cols="5">
      <v-sheet class="ma-2 pa-2">
        Third column
      </v-sheet>
    </v-col>
  </v-row>
</v-container>
  </template>