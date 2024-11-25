import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/",
        name: "home",
        component: () => import("./components/Home")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;