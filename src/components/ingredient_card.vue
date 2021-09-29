<template>
  <div>
    <v-card width="250px" class="ma-2">
      <v-card-title class="justify-center">{{ name }}</v-card-title>
      <h4 style="text-align:center">Description</h4>
      <v-card-text class="text-center">{{ description }}</v-card-text>

      <v-card-actions class="justify-center">
        <ingredient_editing :id="id" :name="name" :description="description" />

        <v-btn
          class="mx-1"
          fab
          dark
          x-small
          color="primary"
          @click="deleteIngredient(id)"
          ><v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ingredient_editing from "@/components/ingredient_editing.vue";
export default {
  props: ["name", "description", "ingredients", "id"],
  components: { ingredient_editing },
  methods: {
    deleteIngredient(id) {
      this.$store.dispatch("deleteIngredient", id);
    },
  },
};
</script>
