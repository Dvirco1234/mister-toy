<template>
    <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
        <article>
            <p><span class="fw-bold">Name:</span> {{ toy.name }}</p>
            <p>
                <span class="fw-bold">Price:</span>
                {{ $filters.currencyUSD(toy.price) }}
            </p>
            <div class="toy-labels">
                <span v-for="label in toy.labels" :key="label">
                    #{{ label }}
                </span>
            </div>
        </article>
        <article class="reviews">
            <h3>Reviews:</h3>
            <div class="review" v-for="review in toy.reviews" :key="review + toy._id">{{ review }}</div>
        </article>
        <button @click="goBack" class="btn btn-primary">go back</button>
    </section>
</template>
<script>
import { toyService } from '../services/toy-service.js'

export default {
    name: 'toy-details',
    data() {
        return {
            toy: null,
        }
    },
    created() {
        const { id } = this.$route.params
        toyService.getById(id).then(toy => {
            this.toy = toy
        })
    },
    methods: {
        goBack() {
            this.$router.push('/toy')
        },
    },
}
</script>
<style></style>
