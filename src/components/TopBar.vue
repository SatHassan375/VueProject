<!-- <template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </template> -->

  <template>
    <div class="m-0 p-0 bg-color">
            <div class="container">
                <div class="row">
                    <div class="topBar d-flex gap-3">
                <p class="m-0">Total Inventory: 376,5164</p>
                <p class="m-0">Cars added Today: 8231</p>
            </div>
                </div>
            </div>
      
    </div>
   <div class="container">
    <div class="row">
        <!-- First column takes 2 columns -->
    <v-col cols="2">
      <v-sheet class="ma-2 pa-2">
       <img src="../assets/images/header-logo.webp" alt="Header-Logo" loading="lazy" width="152" height="50">
      </v-sheet>
    </v-col>

    <!-- Second column takes 5 columns -->
    <v-col cols="5">
      <v-sheet class="ma-2 pa-2">
       <div class="searchBar d-flex">
        <input type="text"  class="form-control" placeholder="Search">
        <button class="btn btn-search bg-light">Search</button>
       </div>
      </v-sheet>
    </v-col>

    <!-- Third column takes 5 columns -->
    <v-col cols="5">
      <v-sheet class="ma-2 pa-2">
       <div class="barRight d-flex align-items-center justify-content-between">
       <div class="ship d-flex align-items-center">
        <p class="m-0">Ship</p>
        <v-select
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="outlined"
></v-select>
       </div> 

       <div class="currency d-flex align-items-center justify-content-between">
        <p class="m-0">USD</p>
        <v-select
        :items="['USD', 'GBP', 'EUR', 'JYP', 'PKR', 'DNR']"
        variant="outlined"></v-select>
       </div>
   
        <div class="language d-flex align-items-center justify-content-between">
            <p class="m-0">ENG</p>
            <v-select
        :items="['Arabic', 'Urdu', 'Spanish', 'Japnese', 'Chinese', 'Hindi']"
        variant="outlined"></v-select>
        </div>
        <p class="m-0">Signin</p>
       </div>
      </v-sheet>
    </v-col>
    </div>
</div>

  </template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>