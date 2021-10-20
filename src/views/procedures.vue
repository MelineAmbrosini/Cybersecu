<template>
  <div>
    <v-row class="mt-2">

      <v-col cols="3"></v-col>

      <v-spacer></v-spacer>

      <v-col cols="3">
        <h1>Gestion des procédures</h1>
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

    <procedure_form></procedure_form>

    <v-container fill-height fluid>
        <v-row
        class="ma-2"
        align="center"
        justify="center">
            <div v-for="item in filteredItems" :key="item.id"
            width=20%
            >
                <Procedure_card 
                :name= "item.name" 
                :description= "item.description" 
                :model= "item.model" 
                :prod_stage= "item.steps" 
                :val_description= "item.val_description"
                />                    
            </div>
          </v-row>          
        </v-container>  
    </div>    
</template>

<script>
import Procedure_card from '@/components/procedure_card'
import procedure_form from '@/components/procedure_form'

export default {
    components: { Procedure_card, procedure_form },
    data: () => ({
        search: "",
    }),
    created() {
        this.$store.dispatch("fetchProcedures");
    },
    computed: {
    procedures() {
        return this.$store.getters.getProcedures;
    },    
    filteredItems() {
        return this.procedures.filter(item => {
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