<template>
    <option :value="course.id">{{course.title}}</option>
</template>

<script>

export default {
    props: {
        course: {
            type: Object,
            required: true
        }
    }
}

</script>