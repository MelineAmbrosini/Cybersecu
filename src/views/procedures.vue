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
            <div v-for="item in filteredItems" :key="item.name"
            width=20%
            >
                <Procedure_card :name= "item.name" :description= "item.description" :model= "item.model" :prod_stage= "item.prod_stage" :val_description= "item.val_description"/>                    
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
        search:"",
        procedures: [
        {
            name: "Procédure 1",
            description: "Calycadnus distentis flumen quam dives distentis qui adnexa montis lateri palmite Calycadnus qui porrigitur porrigitur.",
            model: "Frisbee A",
            prod_stage: [
            {
                no: 1,
                stage: "Etape 1"
            },
            {
                no: 2,
                stage: "Etape 2"
            },
            {
                no: 3, 
                stage: "Etape 3"
            },
            ],
            val_description: "Restituit iam est est victus actitatum postea regeret sine inopia cum iam mora tempore novimus."
        },
        {
            name: "Procédure 2",
            description: "Calycadnus distentis flumen quam dives distentis qui adnexa montis lateri palmite Calycadnus qui porrigitur porrigitur.",
            model: "Frisbee B",
            prod_stage: [
            {
                no: 1,
                stage: "Proinde concepta rabie saeviore, quam desperatio incendebat et fames, amplificatis viribus ardore incohibili in excidium urbium matris Seleuciae efferebantur, quam comes tuebatur Castricius tresque legiones bellicis sudoribus induratae."
            },
            {
                no: 2,
                stage: "Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius, modo non reclamante publico vigore, discessit."
            },
            {
                no: 3, 
                stage: "Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus et tener, quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum, insontium caedibus fecit victoriam luctuosam."
            },
            ],
            val_description: "Restituit iam est est victus actitatum postea regeret sine inopia cum iam mora tempore novimus."
        },
        {
            name: "Procédure 3",
            description: "Calycadnus distentis flumen quam dives distentis qui adnexa montis lateri palmite Calycadnus qui porrigitur porrigitur.",
            model: "Frisbee C",
            prod_stage: [
            {
                no: 1,
                stage: "Etape 1"
            },
            {
                no: 2,
                stage: "Etape 2"
            },
            {
                no: 3, 
                stage: "Etape 3"
            },
            ],
            val_description: "Restituit iam est est victus actitatum postea regeret sine inopia cum iam mora tempore novimus."
        }    
        ]
    }),
    computed: {
    filteredItems() {
      return this.procedures.filter(item => {
         return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
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