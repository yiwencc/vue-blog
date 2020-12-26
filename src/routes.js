/* jshint esversion: 6 */
import VueRouter from 'vue-router';
import Vue from 'vue';
import Context from '@/components/Context';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Detail from '@/components/Detail';
import Article from '@/components/Article';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Context,
            children: [
                {
                    path: '',
                    name: '',
                    component: Article
                },
                {
                    path: 'detail',
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ]
});

export default router;
 