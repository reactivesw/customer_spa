<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    products() {
      return JSON.stringify(this.$store.state.products);
    },
  },
  beforeMount() {
    this.$store.dispatch('FETCH_PRODUCTS');
  },
};
</script>