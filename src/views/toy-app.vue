<template>
    <section class="car-app container flex flex-col gap-1">
        <button @click="goToEdit" class="btn btn-secondary">
            Add a new car
        </button>
        <car-filter @setFilter="setFilter" />
        <car-list @removeCar="removeCar" v-if="cars" :cars="carsToShow" />
    </section>
</template>
<script>
export default {
    name: 'car-app',
}
</script>
