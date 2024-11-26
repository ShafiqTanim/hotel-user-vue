import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/",
        name: "home",
        component: () => import("./components/Home")
    },
    {
        path: "/room",
        alias: "/room",
        name: "room",
        component: () => import("./components/Room")
    },
    {
        path: "/booking",
        alias: "/booking",
        name: "booking",
        component: () => import("./components/Booking")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;