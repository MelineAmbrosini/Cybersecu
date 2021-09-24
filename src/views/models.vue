<template>
  <div>
    <v-row justify="center" align="center" class="mt-2">
        <h1>Gestion des modèles</h1>        
    </v-row>
    <model_form></model_form>
        <v-container fill-height fluid>
          <v-row
          class="ma-2"
          align="center"
          justify="center">
            <div v-for="item in models" :key="item.name"
            width=20%
            >
            <Model_card :name= "item.name" :description = "item.description" :price = "item.price" :range = "item.range" :ingredients= "item.ingredients"/>
          
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
        drawer: false,
        group: null,
        displayIngredient: false,
        displayModel: false,
        displayProcedure: false,
        models: [
        {
            name: 'Modèle A',
            description: 'Calycadnus distentis flumen quam dives distentis qui adnexa montis lateri palmite Calycadnus qui porrigitur porrigitur.',
            price: 5,
            range: "Gamme A",
            ingredients: [
            { name: 'e', weight: 1},
            { name: 'j', weight: 4},
            { name: 's', weight: 8}
            ] 
        },
        {
            name: 'Modèle B',
            description: 'Calycadnus distentis flumen quam dives distentis qui adnexa montis lateri palmite Calycadnus qui porrigitur porrigitur.',
            price: 6,
            range: "Gamme B",
            ingredients: [
            { name: 'a', weight: 5},
            { name: 'b', weight: 7},
            { name: 'd', weight: 9}
            ]      
        },
        {
            name: 'Modèle C',
            description: 'Calycadnus distentis flumen quam dives distentis qui adnexa montis lateri palmite Calycadnus qui porrigitur porrigitur.',
            price: 7,
            range: "Gamme C",
            ingredients: [
            { name: 'r', weight: 5},
            { name: 'd', weight: 7},
            { name: 'y', weight: 8},
            { name: 'a', weight: 6}
            ]      
        },
        {
            name: 'Modèle A',
            description: 'Calycadnus distentis flumen quam dives distentis qui adnexa montis lateri palmite Calycadnus qui porrigitur porrigitur.',
            price: 5,
            range: "Gamme A",
            ingredients: [
            { name: 'e', weight: 1},
            { name: 'j', weight: 4},
            { name: 's', weight: 8}
            ] 
        },
        {
            name: 'Modèle B',
            description: 'Calycadnus distentis flumen quam dives distentis qui adnexa montis lateri palmite Calycadnus qui porrigitur porrigitur.',
            price: 6,
            range: "Gamme B",
            ingredients: [
            { name: 'a', weight: 5},
            { name: 'b', weight: 7},
            { name: 'd', weight: 9}
            ]      
        },
        {
            name: 'Modèle C',
            description: 'Calycadnus distentis flumen quam dives distentis qui adnexa montis lateri palmite Calycadnus qui porrigitur porrigitur.',
            price: 7,
            range: "Gamme C",
            ingredients: [
            { name: 'r', weight: 5},
            { name: 'd', weight: 7},
            { name: 'y', weight: 8},
            { name: 'a', weight: 6}
            ]      
        },
        ]
    })
}
</script>

<style scoped>
h1 {
    margin: 10px;
    text-align: center;
}
</style>

