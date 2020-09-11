import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1,
        lessons: []
    },
    mutations: {
        setLessons(state, newLessons) {
        state.lessons = newLessons
        }
    },
    actions: {
        async getLessons(context) {
            try {
                const response = await fetch('https://5daca7380af117001417072a.mockapi.io/api/v1/lessons')
                const data = await response.json()
                context.commit('setLessons', data)
            } catch (error) {
                console.error(error)
            }
        }
    }
});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
