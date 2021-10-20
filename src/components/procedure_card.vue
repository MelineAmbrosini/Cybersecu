<template>
    <div>
        <v-card
        width="250px"
        class="mx-2"        
        >            
            <v-card-title class="justify-center">{{ name }}</v-card-title>

            <h4 style="text-align:center">Description</h4>
            <v-card-text class="text-center">{{ description }}</v-card-text>

            <h4 style="text-align:center">Modèle de frisbee</h4>
            <v-card-text class="text-center">{{ model }}</v-card-text>

            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4>Etapes de fabrication</h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{ steps }}                                          
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4>Procédure de validation</h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{ val_description }}
                    </v-expansion-panel-content>

                </v-expansion-panel>
            </v-expansion-panels>
            
            <v-row justify="center">
                <v-card-actions>
                    <procedure_editing 
                    :name= "name" 
                    :description= "description" 
                    :model= "model" 
                    :val_description= "val_description" 
                    :prod_stage= "steps" />                                    

                    <v-btn
                    class="mx-3 mt-3"
                    fab
                    dark
                    x-small
                    color="primary"
                    @click="deleteProcedure(id)"
                    ><v-icon>mdi-delete</v-icon>
                    </v-btn>                    
                </v-card-actions>
            </v-row>
        </v-card>
    </div>    
</template>

<script>
import procedure_editing from "@/components/procedure_editing.vue";


export default {
    components: { procedure_editing },
    props: ['name', 'description', 'model', 'steps', 'val_description', 'procedures', 'id'],
    methods: {
        deleteProcedure(id) {
            this.$store.dispatch("deleteProcedure", id);
        },
    },    
}
</script>