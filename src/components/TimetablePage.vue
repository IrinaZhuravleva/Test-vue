<template>
    <table class="table fs-14">
        <thead>
            <tr>
            <th>Занятие</th>
            <th>Дата</th>
            <th>Описание занятия</th>
            </tr>
        </thead>
        <LessonTable v-bind:lessons="newLessons"
        />
    </table>
</template>

<script>
import LessonTable from '@/components/LessonTable'

export default {
    mounted() {
        this.getLessons()

        window.eventHub.$on('change-lessons-filter', (selectedFilter) => {
            this.selectedFilter = selectedFilter
        })
    },
    methods: {
        getLessons() {
            this.$store.dispatch('getLessons');
        },
    },
    data () {
        return {
            lessons: [],
            selectedFilter: "all",
        }
    }, 
    components: {
        LessonTable
    },
    
    computed: {
        newLessons () {
            if (this.selectedFilter == 'all') {
                return this.$store.state.lessons
            }

            return this.$store.state.lessons.filter(item => item.courseId == this.selectedFilter)
        },
    },
}
</script>
  
<style scoped>
    button.page-link {
        display: inline-block;
    }
    button.page-link {
        font-size: 20px;
        color: #29b3ed;
        font-weight: 500;
    }
</style>