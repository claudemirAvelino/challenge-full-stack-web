import { createRouter, createWebHistory } from "vue-router";
// import HelloWorld from "@/components/HelloWorld";

const Home = { template: '<div>Home</div>' }
const Students = { template: '<div>Students</div>' }

const routes = [
    {
        path: '/',
        name: 'Home',
        Component: Home
    },
    {
        path: '/students',
        name: 'Students',
        Component: Students
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;