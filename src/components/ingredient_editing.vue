<template>
  <div class="ingredient_editing">
    <v-dialog v-model="dialog" persistent max-width="600px">
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

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card v-model="valid">
          <v-card-title>
            <span class="text-h5">Ingrédient</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-col cols="12">
                <v-text-field
                  label="Nom*"
                  required
                  :rules="nameRules"
                  v-model="newName"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  name="Description"
                  label="Description"
                  hint="Description de l'ingrédient"
                  v-model="newDescription"
                ></v-textarea>
              </v-col>
            </v-container>
            <small>*champs requis</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Fermer
            </v-btn>

            <v-btn :disabled="!valid" color="primary" text @click="validate">
              Valider
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "description"],
  data: () => ({
    dialog: false,
    newName: "",
    newDescription: "",
  }),
  created() {
    this.newName = this.name;
    this.newDescription = this.description;
  },
  methods: {
    validate() {
      this.$store.dispatch("updateIngredient", {
        id: this.id,
        name: this.newName,
        description: this.newDescription,
      });

      this.dialog = false;
    },
  },
};
</script>
