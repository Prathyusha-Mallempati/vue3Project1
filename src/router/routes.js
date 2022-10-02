import Cards from "../pages/Cards/index.vue";

import SettingsPage from "../pages/SettingsPage/index.vue";

import TablePage from "../pages/TablePage/index.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout/index.vue"),
    // component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/Index.vue") },
      {
        path: "",
        name: "TABLE",
        component: TablePage,
      },
      {
        path: "/cards",
        name: "MY_CARDS",
        component: Cards,
      },
      {
        path: "/settings",
        name: "SETTINGS",
        component: SettingsPage,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
