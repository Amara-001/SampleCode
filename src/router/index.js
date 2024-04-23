import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../components/HomeView.vue';
import ContactView from '../components/ContactView.vue';
import RegisterView from '../components/RegisterView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    },
    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;