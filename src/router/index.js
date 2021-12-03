import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:"/systemManager",
    name:"systemManager",
    component: () =>
      import("../views/SystemManager.vue"),
    children:[
      {
        path:"/userManager",
        name:"userManager",
        component: () =>
          import("../views/user/UserManager.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next)=>{
  console.debug("to",to);
  console.debug("from",from);
  next();
})

export default router;
