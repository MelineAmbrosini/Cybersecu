<template>
  <div>
    <v-row justify="center" align="center" class="mt-2">
        <h1>Gestion des ingrédients</h1>        
    </v-row>
    <ingredient_form></ingredient_form>
        <v-container fill-height fluid>
          <v-row
          class="ma-2"
          align="center"
          justify="center">
            <div v-for="item in ingredients" :key="item.name"
            width=20%
            >          
            <ingredient_card :name= "item.name" :description = "item.description"/>
            </div>
          </v-row>          
        </v-container>  
    </div>    
</template>

<script>
import ingredient_card from '@/components/ingredient_card.vue';
import ingredient_form from '@/components/ingredient_form.vue';

export default {
  components: { ingredient_card, ingredient_form },       

  data: () => ({  
    ingredients: [
      {
        name: 'Ingrédient A',
        description: 'Et nec vocare verendum terram terram quid amicitiam et paribus ratio affluentior et acceperit ac ne voluntatibus plus in restricte.'
      },
      {
        name: 'Ingrédient B',
        description: 'Et nec vocare verendum terram terram quid amicitiam et paribus ratio affluentior et acceperit ac ne voluntatibus plus in restricte.'
      },
      {
        name: 'Ingrédient C',
        description: 'Et nec vocare verendum terram terram quid amicitiam et paribus ratio affluentior et acceperit ac ne voluntatibus plus in restricte.'
      },
      {
        name: 'Ingrédient D',
        description: 'Et nec vocare verendum terram terram quid amicitiam et paribus ratio affluentior et acceperit ac ne voluntatibus plus in restricte.'
      },
      {
        name: 'Ingrédient E',
        description: 'Et nec vocare verendum terram terram quid amicitiam et paribus ratio affluentior et acceperit ac ne voluntatibus plus in restricte.'
      },
      {
        name: 'Ingrédient F',
        description: 'Et nec vocare verendum terram terram quid amicitiam et paribus ratio affluentior et acceperit ac ne voluntatibus plus in restricte.'
      },
      {
        name: 'Ingrédient G',
        description: 'Et nec vocare verendum terram terram quid amicitiam et paribus ratio affluentior et acceperit ac ne voluntatibus plus in restricte.'
      },
      {
        name: 'Ingrédient H',
        description: 'Et nec vocare verendum terram terram quid amicitiam et paribus ratio affluentior et acceperit ac ne voluntatibus plus in restricte.'
      },
      {
        name: 'Ingrédient I',
        description: 'Et nec vocare verendum terram terram quid amicitiam et paribus ratio affluentior et acceperit ac ne voluntatibus plus in restricte.'
      }
    ]
  })
}
</script>

<style scoped>
h1 {
    margin: 10px;
    text-align: center;
}
</style>