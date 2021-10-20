<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            class="mx-3 mt-3"
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
                  label="Nom"                  
                  required
                  :rules="nameRules"
                  v-model="name"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                outlined
                    name="Description"
                    label="Description"
                    hint="Description de la procédure"
                    v-model="description"
                ></v-textarea>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Modèle frisbee"                  
                  required
                  :rules="modelRules"
                  v-model="model"
                ></v-text-field>
              </v-col>
            
              <v-col cols="12">                  
                  <v-text-field
                  label="Etape*"                  
                  required
                  :rules="stageRules"
                  v-model="steps"                  
                ></v-text-field>
              </v-col>         

              <v-col cols="12">
                <v-textarea
                outlined
                name="DescriptionTest"
                label="Description de la procédure de validation des tests"
                required
                :rules="descriptionRules"
                v-model="val_description"
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
            :disabled="!valid"            
            color="primary"
            text
            @click="validate()"
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
    props: ['id','name', 'description', 'model', 'steps', 'val_description'],
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
      newName: "",
      newDescription: "",
      newModel: "",
      newSteps: "",
      newVal_Description: "",
    }),
    created() {
      this.newName = this.name;
      this.newDescription = this.description;
      this.newModel = this.model
      this.newSteps = this.steps
      this.newVal_Description = this.val_description
    },
    methods: {
      validate() {
        this.$store.dispatch("updateProcedure", {
          id: this.id,
          name: this.newName,
          description: this.newDescription,
          model: this.newModel,
          steps: this.newSteps,
          val_description: this.newVal_Description
        });

        this.dialog = false;
      },
    },
  }
</script>