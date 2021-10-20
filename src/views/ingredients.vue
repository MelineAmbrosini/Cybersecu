<template>
  <div>
    <v-row class="mt-2">
      <v-col cols="3"></v-col>

      <v-spacer></v-spacer>

      <v-col cols="3">
        <h1>Gestion des ingrédients</h1>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="3">
        <v-card flat max-width="300px">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>

    <ingredient_form></ingredient_form>

    <v-container fill-height fluid>
      <v-row class="ma-2" align="center" justify="center">
        <div v-for="item in filteredItems" :key="item.id" width="20%">
          <ingredient_card
            :id="item.id"
            :name="item.name"
            :description="item.description"
          />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ingredient_card from "@/components/ingredient_card.vue";
import ingredient_form from "@/components/ingredient_form.vue";
//import search from '@/components/search.vue';

export default {
  components: { ingredient_card, ingredient_form /*, search */ },
  data: () => ({
    search: "",
  }),
  methods: {

  },
  created() {
    this.$store.dispatch("fetchIngredients");
  },
  computed: {
    ingredients() {
      return this.$store.getters.getIngredients;
    },
    filteredItems() {
      return this.ingredients.filter((item) => {
        return item.name.toLowerCase().match(this.search)
      });
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 10px;
  text-align: center;
}
</style>
