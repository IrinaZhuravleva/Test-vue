<template>
<div>
    <table class="table fs-14">
        <thead>
            <tr>
            <th>Занятие</th>
            <th>Дата</th>
            <th>Описание занятия</th>
            </tr>
        </thead>
        <LessonTable v-bind:lessons="displayedLessons"
        />
    </table>
    <div class="btn-group d-f">
        <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> &lt;&lt;</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" v-bind:key="pageNumber.id" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
        <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
    </div>
</div>
</template>

<script>
import LessonTable from '@/components/LessonTable'


export default {
     data () {
        return {
            lessons: [],
            selectedFilter: "all",

            page: 1,
            perPage: 3,
            pages: [],

        }
    }, 
    components: {
        LessonTable
   
    },
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
        setPages () {
            let numberOfPages = Math.ceil(this.newLessons.length / this.perPage);
            this.pages =[];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate (newLessons) {
            let page = this.page;
            let perPage = this.perPage;
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return newLessons.slice(from, to);
        }
    },
    watch: {
        newLessons () {
            this.setPages();
        }
    },
    computed: {
        newLessons () {
            if (this.selectedFilter == 'all') {
                return this.$store.state.lessons
            }

            return this.$store.state.lessons.filter(item => item.courseId == this.selectedFilter)
        },
        displayedLessons () {
            return this.paginate(this.newLessons);
        }
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