<template>
    <div>
        <select
            class="custom-select"
            id="inputGroupSelect01"
            v-model="selectedFilter"
            @change="onChange"
            >
            <option selected value="all">Все курсы</option>
            <OptionItem 
                v-for="course of courses" :key="course.id"
                v-bind:course="course"
                />
        </select>
    </div>
</template>

<script>

import OptionItem from '@/components/OptionItem'

export default {
    props: ['courses'],
    data () {
        return {
            selectedFilter: 'all'
        }
    },
    components: {
        OptionItem
    },
    methods: {
        onChange() {
            window.eventHub.$emit('change-lessons-filter', this.selectedFilter);
        }
    }

    // methods: {
    //     onSubmit() {
    //         console.log('sumb', this.title);
    //         if (this.title.trim()) {
    //             const newToDo = {
    //                 id: Date.now(),
    //                 title: this.title,
    //                 completed: false
    //             }
    //         }
    //         this.$emit('add-todo', newToDo)
    //     }
    // }
    
}
</script>
