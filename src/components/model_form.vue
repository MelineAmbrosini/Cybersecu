<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="mb-3"
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Ajouter 
        <v-icon class="ml-2">mdi-pencil-plus</v-icon>
        </v-btn>
      </template>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

      <v-card v-model="valid">
        <v-card-title>
          <span class="text-h5">Modèle</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-col cols="12">
                <v-text-field
                  label="Nom*"                  
                  required
                  :rules="nameRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                outlined
                    name="Description"
                    label="Description"
                    hint="Description du modèle"
                ></v-textarea>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Prix unitaire (HT)*"                  
                  required
                  :rules="priceRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Gamme*"                  
                  required
                  :rules="rangeRules"
                ></v-text-field>
              </v-col> 

            
              <div v-for="item in ingredients" :key="item.id">
                  
                  <v-text-field
                  label="Ingrédient*"                  
                  required
                  :rules="ingredientRules"
                  
                ></v-text-field>
                <v-text-field
                  label="Poids*"                  
                  required      
                  :rules="weightRules"            
                ></v-text-field>
              </div>

              <v-btn color="primary" @click="addRow">Ajouter un ingrédient</v-btn>

          </v-container>
          <small>*champs requis</small>
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
            :disabled="!valid"            
            color="primary"
            text
            @click="validate"
          >
            Valider
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {    
    data: () => ({
      dialog: false,
      valid: true,
      nameRules: [
        v => !!v || 'Nom requis'
      ],
      priceRules: [
        v => !!v || 'Prix requis',
        v => !isNaN(parseInt(v)) || 'Saisissez un nombre'
      ],
      rangeRules: [
        v => !!v || 'Gamme requise'
      ],
      ingredientRules: [
        v => !!v || 'Ingrédient requis'
      ],
      weightRules: [
        v => !!v || 'Poids requis',
        v => !isNaN(parseInt(v)) || 'Saisissez un nombre'
      ],
      id: 1,
      ingredients: [{name: "", weight: ""}]
    }),
    methods: {
        validate () {
        this.$refs.form.validate()
        },
        addRow() {
            this.id += 1;
            this.ingredients.push({
                name: "",
                weight: ""
            });
        }
    }
  }
</script>