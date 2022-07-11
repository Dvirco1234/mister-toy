<template>
    <section class="toy-app container flex flex-col gap-1">
        <button @click="goToEdit" class="btn">Add a new toy</button>
        <toy-filter />
        <toy-list v-if="toys" :toys="toys" />
    </section>
</template>

<script>
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'

export default {
    name: 'toy-app',
    computed: {
        toys() {
            return this.$store.getters.toys
        },
    },
    components: {
        toyList,
        toyFilter,
    },
}
</script>
