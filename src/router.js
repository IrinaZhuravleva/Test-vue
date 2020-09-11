import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/MainPage'
import Lesson from '@/components/LessonPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/timetable',
            component: () => import('./components/TimetablePage.vue')
        },
        {
            path: '/lesson/:id',
            component: Lesson,
            name: 'lesson',
        }, {
            path: '/tests',
            component: () => import('./components/TestsPage.vue')
        }, {
            path: '/statistics',
            component: () => import('./components/StatisticsPage.vue')
        }
    ]
})
