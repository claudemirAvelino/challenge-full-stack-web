import { createRouter, createWebHistory } from "vue-router";
import StudentsList from "@/components/StudentsList";
import SaveStudent from '@/components/SaveStudent';

const routes = [
    {
        path: '/students',
        component: StudentsList
    },
    {
        path: '/save-student/:id',
        component: SaveStudent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;
