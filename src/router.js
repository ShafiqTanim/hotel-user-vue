import { createWebHistory, createRouter } from "vue-router";

function isAuthenticated() {
    // Check if 'udata' exists in sessionStorage
    return !!sessionStorage.getItem('udata');
}

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
        component: () => import("./components/Profile"),
        beforeEnter: (to, from, next) => {
            if (isAuthenticated()) {
                next(); // Allow access if authenticated
            } else {
                next("/login"); // Redirect to login if not authenticated
            }
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;