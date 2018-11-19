import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
      import("../views/HomePage")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("../views/AboutPage")
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () =>
        import("../views/ContactsPage")
    },
    {
      path: "/account-center",
      name: "account-center",
      component: () =>
        import("../views/AccountCenter")
    },
    {
      path: "/account-settings",
      name: "account-settings",
      component: () =>
        import("../views/AccountSettings")
    },
    {
      path: "/sign",
      name: "sign",
      component: () =>
        import("../views/SignPage")
    }
  ]
});
