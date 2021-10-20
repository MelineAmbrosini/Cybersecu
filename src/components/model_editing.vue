<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            class="mx-3"
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
          <span class="text-h5">Modèle</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-col cols="12">
                <v-text-field
                  label="Nom"
                  v-model="name"
                  required
                  :rules="nameRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                outlined
                    name="Description"
                    v-model="description"
                    label="Description"
                    hint="Description de l'ingrédient"
                ></v-textarea>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Prix unitaire (HT)"     
                  v-model="price"             
                  required
                  :rules="priceRules"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Gamme"
                  v-model="range"                  
                  required
                  :rules="rangeRules"
                ></v-text-field>
              </v-col> 

            
              <div v-for="item in components" :key="item.id">
                  
                  <v-text-field
                  label="Ingrédient" 
                  v-model="item.name"                 
                  required
                  :rules="ingredientRules"
                  
                ></v-text-field>
                <v-text-field
                  label="Poids"
                  v-model="item.weight"                  
                  required      
                  :rules="weightRules"            
                ></v-text-field>
              </div>
              
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
    props: ['id','name', 'description', 'price', 'range', 'components'],   
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
      newName: "",
      newDescription: "",
      newPrice: "",
      newRange: ""      
    }),
    created() {
      this.newName = this.name;
      this.newDescription = this.description;
      this.newPrice = this.price
      this.newRange = this.range      
    },
    methods: {
      validate() {
        this.$store.dispatch("updateModel", {
          id: this.id,
          name: this.newName,
          description: this.newDescription,
          price: this.newPrice,
          range: this.newRange,
        });
        this.dialog = false;
      },
      addRow() {
        this.id += 1;
        this.ingredients.push({
        name: "",
        weight: ""
      });
    }
  },
}
</script>