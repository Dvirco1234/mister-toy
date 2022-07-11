<template>
  <ul class="car-list clean-list grid gap-1">
    <car-preview @removeCar="removeCar" v-for="car in cars" :car="car" :key="car.id" />
  </ul>
</template>

<script>
import carPreview from './car-preview.vue'

export default {
  props: {
    cars: {
      type: Array,
      required: true,
    },
  },
  components: {
    carPreview,
  },
  methods: {
    removeCar(carId) {
      this.$emit('removeCar', carId)
    },
  },
}
</script>
