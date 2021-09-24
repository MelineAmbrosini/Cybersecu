<template>
  <v-app>  
    <v-card class="overflow-hidden"
    height=100%
    >
    <v-app-bar
      color="#3066BE"
      dark
    >    
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon
        x-large
        dark
        >mdi-bee
        </v-icon>        
        KillerBee - Gestion des frisbees</v-toolbar-title>
    </v-app-bar> 

    <router-view></router-view>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-blue--text text--accent-4"
        >        
          <v-list-item  @click="goToIngredients(); drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-test-tube</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ingrédients</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToModels(); drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-circle-slice-8</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Modèles</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToProcedures(); drawer = false">
            <v-list-item-icon>
              <v-icon>mdi-ballot</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Procédés</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>     

    </v-card>
  </v-app>
</template>

<script>

export default {  
  name: 'App', 
  data: () => ({
    drawer: false,
    group: null,    
  }),
  methods: {
    goToIngredients () {
      this.$router.push('/ingredients')
    },
    goToModels () {
      this.$router.push('/models')
    },
    goToProcedures () {
      this.$router.push('/procedures')
    }
  }
  
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

</style>
