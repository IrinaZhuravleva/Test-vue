<template>
    <tbody>
        <tr></tr>
        <TableItem 
        v-for="lesson of lessons" :key="lesson.id"
        v-bind:lesson="lesson"
            
            />
    </tbody>
</template>

<script>
import TableItem from '@/components/TableItem'
export default {
    props: ['lessons'],
    components: {
        TableItem
    },
}
</script>