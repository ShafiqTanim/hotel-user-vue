import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/",
        name: "home",
        component: () => import("./components/Home")
    },
    {
        path: "/about",
        alias: "/about",
        name: "about",
        component: () => import("./components/About")
    },
    {
        path: "/room",
        alias: "/room",
        name: "room",
        component: () => import("./components/Room")
    },
    {
        path: "/amenities",
        alias: "/amenities",
        name: "amenities",
        component: () => import("./components/Amenities")
    },
    {
        path: "/booking",
        alias: "/booking",
        name: "booking",
        component: () => import("./components/Booking")
    },
    {
        path: "/login",
        alias: "/login",
        name: "login",
        component: () => import("./components/Login")
    },
    {
        path: "/contact",
        alias: "/contact",
        name: "contact",
        component: () => import("./components/Contact")
    },
    {
        path: "/profile",
        alias: "/profile",
        name: "profile",
        component: () => import("./components/Profile")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;