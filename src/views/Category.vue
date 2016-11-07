<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return JSON.stringify(this.$store.getters.currentCategoryProducts);
    },
  },
  watch: {
    $route() {
      this.fetchProducts();
    },
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch('FETCH_CURRENT_PRODUCTS');
    },
  },
};
</script>