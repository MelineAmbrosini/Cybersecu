<template>
    <div class="ingredient_editing">
        <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            class="mx-1"
            fab
            dark
            x-small
            color="primary"            
            v-bind="attrs"
            v-on="on"
            >        
            <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
            <span class="text-h5">Ingrédient</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-col cols="12">
                    <v-text-field
                    label="Nom"
                    v-model="name"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea
                        v-model="description"
                        outlined
                        name="Description"
                        label="Description"
                        hint="Description de l'ingrédient"
                    ></v-textarea>
                </v-col>            
            </v-container>
            
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
                Fermer
            </v-btn>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
                Valider
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
  export default {
    props: ['name', 'description'],
    data: () => ({
      dialog: false
    }),
  }
</script>