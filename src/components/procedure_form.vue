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
          <span class="text-h5">Procédure</span>
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
                    hint="Description de la procédure"
                ></v-textarea>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Modèle frisbee*"                  
                  required
                  :rules="modelRules"
                ></v-text-field>
              </v-col>
            
              <div v-for="item in prod_stage" :key="item.id">
                  
                  <v-text-field
                  label="Etape*"                  
                  required
                  :rules="stageRules"
                  
                ></v-text-field>
              </div>

              <v-btn color="primary" @click="addRow">Ajouter une étape</v-btn>

              <v-col cols="12">
                <v-textarea
                outlined
                name="DescriptionTest"
                label="Description de la procédure de validation des tests"
                required
                :rules="descriptionRules"
                ></v-textarea>
              </v-col>

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
      modelRules: [
        v => !!v || 'Modèle requis'        
      ],
      stageRules: [
        v => !!v || 'Etape requise'
      ],
      descriptionRules: [
        v => !!v || 'Description requise'
      ],      
      id: 1,
      prod_stage: [{no: "", stage: ""}]
    }),
    methods: {
        validate () {
        this.$refs.form.validate()
        },
        addRow() {
            this.id += 1;
            this.prod_stage.push({
                no: "",
                stage: ""
            });
        }
    }
  }
</script>