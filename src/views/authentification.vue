<template>
  <v-card class="ma-auto" max-width="300px">
    <v-form
      class="mx-4 mt-12"
      ref="authentification"
      v-model="valid"
      lazy-validation
    >
      <v-card-title class="justify-center">Authentification </v-card-title>

      <v-text-field
        v-model="model.email"
        :rules="usernameRules"
        label="Identifiant"
        required
      ></v-text-field>

      <v-text-field
        v-model="model.password"
        :rules="passwordRules"
        label="Mot de passe"
        required
      ></v-text-field>
      <v-card-actions class="justify-center">
        <v-btn
          :disabled="!valid"
          color="primary"
          class="ma-2"
          @click="validate"
        >
          Se connecter
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    model: {
      email: "",
      password: "",
    },
    valid: true,
    usernameRules: [(v) => !!v || "Identifiant requis"],
    passwordRules: [(v) => !!v || "Mot de passe requis"],
  }),

  methods: {
    validate() {
      this.$store.dispatch("login", { credentials: this.model });
    },
  },
};
</script>
