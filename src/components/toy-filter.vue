<template>
    <section class="toy-filter">
        <input
            v-model="filterBy.name"
            @input="setFilter"
            type="text"
            class="form-input"
            placeholder="Search toy..."
        />
        <button @click="inStockFilter">
            <span v-if="!filterBy.inStock">Show only toys in stock</span>
            <span v-else>Show all toys</span>
        </button>
        <select multiple v-model="filterBy.labels" @change="setFilter">
            <option v-for="(opt, i) in labels" :key="i" :value="labels[i]">
                {{ labels[i] }}
            </option>
        </select>
        <div class="sort-toys">
            <select v-model="filterBy.sortBy" @change="setFilter">
                <option v-for="(opt, i) in sortOpts" :key="i" :value="sortOpts[i]">
                    {{ sortOpts[i] }}
                </option>
            </select>
        </div>
    </section>
</template>

<script>
export default {
    name: 'toy-filter',
    created() {
        // this.filter = utilService.debounce(this.filter)
    },
    data() {
        return {
            filterBy: {
                name: '',
                inStock: false,
                labels: [],
                sortBy: 'createdAt',
            },
            sortOpts: ['createdAt', 'price', 'name'],
        }
    },
    methods: {
        setFilter() {
            // console.log(this.filterBy);
            this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)))
        },
        // setLabels() {

        //     console.log(this.filterBy.labels);
        // },
        inStockFilter() {
            this.filterBy.inStock = !this.filterBy.inStock
            this.setFilter()
        },
    },
    computed: {
        labels() {
            return this.$store.getters.labels
        },
    },
}
</script>
