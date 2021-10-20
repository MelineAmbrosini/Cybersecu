<template>
    <div>
        <v-card               
        class="ma-2"    
        max-width="300px"
        >
            <v-card-title class="justify-center">{{ name }}</v-card-title>               

            <h4 style="text-align:center">Description</h4>
            <v-card-text class="text-center">
                <div>
                    {{ description }}
                </div>
            </v-card-text>
                            
            <v-row>
                <v-col>           
                    <h4 style="text-align:center">Prix unitaire (HT)</h4>
                    <v-card-text class="text-center">{{ price }}</v-card-text>

                    <h4 style="text-align:center">Gamme</h4>
                    <v-card-text class="text-center">{{ range }}</v-card-text>
                </v-col>

                <v-col>
                    <h4 style="text-align:center">Ingrédients</h4>
                    <v-card-text>
                        <ul style="list-style-type: '-';">
                            <li v-for="item in components" :key="item.name">
                                {{item.name}} {{item.weight}}g
                            </li>
                            </ul>                       
                    </v-card-text>
                </v-col>
            </v-row>

            <v-row justify="center">
            <v-card-actions>
                
                    <model_editing 
                    :name= "name" 
                    :description= "description" 
                    :price= "price" 
                    :range= "range" 
                    :components= "components" />                           

                    <v-btn
                    class="mx-3"
                    fab
                    dark
                    x-small
                    color="primary"
                    @click="deleteModel(id)"
                    ><v-icon>mdi-delete</v-icon>
                    </v-btn>
                
            </v-card-actions> 
            </v-row>           
        </v-card>
    </div>    
</template>

<script>
import model_editing from "@/components/model_editing.vue";
export default {
    props: ['name', 'description', 'price', 'range', 'models', 'components','id'],
    components: { model_editing },
    methods: {
    deleteModel(id) {
      this.$store.dispatch("deleteModel", id);
    },
  },

    
}
</script>

<style scoped>

</style>