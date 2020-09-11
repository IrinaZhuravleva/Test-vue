<template> 
    <div class="container-fluid">
        
        <h2>Страница одного занятия</h2>
        <div class="row mt-3 mb-5">
            <div class="col-12" v-if="selectedLesson">
                <p>Название занятия: <strong>{{ selectedLesson.title }}</strong></p>
                <p>Дата начала: <strong>{{ formatDate(selectedLesson.startedAt) }}</strong></p>
            </div>
            <div v-else>Выберите урок на странице с расписанием</div>
        </div>
        
        <ul>
            <router-link
                to="/tests"
                v-slot="{ href, route, navigate, isActive, isExactActive }"
              >
                <li
                  :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
                >
                  <a :href="href" @click="navigate" class="lesson-link">Тесты</a>
                </li>
              </router-link>
              <router-link
                to="/statistics"
                v-slot="{ href, route, navigate, isActive, isExactActive }"
              >
                <li
                  :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
                >
                  <a :href="href" @click="navigate" class="lesson-link">Статистика</a>
                </li>
              </router-link>
          </ul>
        
    </div>
</template>

<script>

export default {
    computed: {
        selectedLesson () {
            return this.$store.state.lessons.filter(lesson => lesson.id == this.$route.params.id)[0]
        }
    },
    mounted () {
        if (this.$store.state.lessons.length == 0) {
            this.$store.dispatch('getLessons');
        }
    },
    methods: {
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

<style scoped>
    ul {
        margin: 0 auto;
        padding: 0px;
        width: 300px;
        display: flex;
        justify-content: space-between;
        list-style: none;
    }

    li {
        border-radius: 5px;
        background-color: #2865B1;
    }

    li:not(:first-child) {
        margin-left: 10px;
    }

    li:hover {
        cursor: pointer;
        transition: all .25s ease;
        background-color: black;
    }

    .lesson-link {
        cursor: pointer;
        display: inline-block;
    }

    a.lesson-link {
        color: #fff;
        display: inline-block;
        padding: 10px 50px;
        text-decoration: none;
    }
</style>