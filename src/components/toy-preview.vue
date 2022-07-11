<template>
  <li class="car-preview">
    <custom-card>
      <template #header>
        <p><span class="fw-bold">Vendor:</span> {{ car.vendor }}</p>
        <p><span class="fw-bold">Speed:</span> {{ car.speed }}</p>
        <p><span class="fw-bold">Price:</span> {{ $filters.currencyUSD(car.price) }}</p>
      </template>

      <template #footer>
        <div class="btn-group">
          <button @click="goToEdit" class="btn btn-primary">edit</button>
          <button @click="goToDetail" class="btn btn-info">details</button>
          <button @click="removeCar(car.id)" class="btn btn-danger">delete</button>
        </div>
      </template>
    </custom-card>
  </li>
</template>

<script>
import customCard from './custom-card.vue'

export default {
  name: 'car-preview',
  props: {
    car: Object,
  },
  components: {
    customCard,
  },
  methods: {
    goToDetail() {
      this.$router.push(`/car/${this.car.id}`)
    },
    goToEdit() {
      this.$router.push(`/car/edit/${this.car.id}`)
    },
    removeCar(carId) {
      this.$emit('removeCar', carId)
    },
  },
}
</script>
