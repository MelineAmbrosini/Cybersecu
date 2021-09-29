import Vue from "vue";
import VueRouter from "vue-router";
import Ingredients from "@/views/ingredients.vue";
import Models from "@/views/models.vue";
import Procedures from "@/views/procedures.vue";
import Authentification from "@/views/authentification.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "authentification",
    component: Authentification,
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: Ingredients,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/models",
    name: "models",
    component: Models,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/procedures",
    name: "procedures",
    component: Procedures,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "*",
    redirect: "/ingredients",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
