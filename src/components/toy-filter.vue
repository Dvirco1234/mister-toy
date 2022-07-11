<template>
  <section class="car-filter">
    <input
      v-focus
      v-model="filterBy.vendor"
      @input="setFilter"
      type="text"
      class="form-input"
      placeholder="Search vendor..."
    />
  </section>
</template>

<script>
export default {
  name: 'car-filter',
  data() {
    return {
      filterBy: {
        vendor: '',
      },
    }
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', this.filterBy)
    },
  },
}
</script>
