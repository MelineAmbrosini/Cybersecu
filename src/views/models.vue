<template>
  <div>
    <v-row class="mt-2">

      <v-col cols="3"></v-col>

      <v-spacer></v-spacer>

      <v-col cols="3">
        <h1>Gestion des modèles</h1>
      </v-col>

      <v-spacer></v-spacer>      

      <v-col cols="3">
        <v-card flat
        max-width="300px"        
        >
          <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          ></v-text-field>          
        </v-card>
      </v-col>           
    </v-row>

    <model_form></model_form>
        <v-container fill-height fluid>
          <v-row
          class="ma-2"
          align="center"
          justify="center">
            <div v-for="item in filteredItems" :key="item.id"
            width=20%
            >
            <Model_card 
            :name= "item.name" 
            :description = "item.description" 
            :price = "item.price" 
            :range = "item.range" 
            />          
            </div>
          </v-row>          
        </v-container>  
    </div>    
</template>

<script>
import Model_card from '@/components/model_card.vue'
import model_form from '@/components/model_form.vue'

export default {
    components: { Model_card, model_form },
    data: () => ({
        search: "",
        drawer: false,
        group: null,
        displayIngredient: false,
        displayModel: false,
        displayProcedure: false,        

    }),
    created() {
        this.$store.dispatch("fetchModels");
        this.$store.dispatch("fetchComponents");
    },
    computed: {
    models() {
        return this.$store.getters.getModels;
    },  
    components() {
        return this.$store.getters.getComponents;
    },
    filteredItems() {
      return this.models.filter(item => {
         return item.name.toLowerCase().match(this.search)
      })
    }  
  }
}
</script>

<style scoped>
h1 {
    margin: 10px;
    text-align: center;
}
</style>
