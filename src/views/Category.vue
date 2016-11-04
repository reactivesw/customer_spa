<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return JSON.stringify(this.$store.state.product.products);
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
      const categorySlug = this.$route.params.slug;
      this.$store.dispatch('FETCH_PRODUCTS', { categorySlug });
    },
  },
};
</script>