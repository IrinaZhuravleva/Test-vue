<template>
    <tr>
        <td>{{lesson.id}}</td>
        <td>{{formatDate(lesson.startedAt)}}</td>
        <router-link
            :to="{ name: 'lesson', params: { id: lesson.id }}"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
            <td @click="getLesson"
                :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
            >
                <a :href="href" @click="navigate">{{lesson.title}}</a>
            </td>
        </router-link>
    </tr>
</template>

<script>
export default {  
    props: {
        lesson: {
            type: Object,
            required: true
        }
    },

    computed: {
        count () {
            return this.$store.state.count
        }
    },    

    methods: {
        getLesson () {
            // store.commit('getLesson')
        },
        formatDate(inputStr) {
            var timestamp = parseInt(inputStr, 10);
            var date = new Date(timestamp);
            var a =date.toISOString().substr(0, 10);

            var datePart = a.match(/\d+/g),
            year = datePart[0], 
            month = datePart[1], day = datePart[2];
            return day+'-'+month+'-'+year;
        }
    }
}
</script>

