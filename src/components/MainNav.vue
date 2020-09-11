<template>
    <div class="main-wrapper">
        <div class="container-fluid">
            <div class="d-flex justify-content-between align-items-center">
                <img alt="Vue logo" src="../assets/logo.png" width="100">
                <form action="">
                    <div class="row mb-3 justify-content-start">
                        <div class="col">
                            <SelectCourse v-bind:courses="courses"/>
                        </div>
                    </div>
                </form>
            </div> 
        </div>
    </div>
</template>

<script>
import SelectCourse from '@/components/SelectCourse'

export default {
    data() {
        return {
            courses: [
                {id: 1, title: 'Математика'},
                {id: 2, title: 'Русский язык'},
            ]
        }
    },
    components: {
       SelectCourse
   }
}

</script>