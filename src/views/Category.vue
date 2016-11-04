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
  beforeRouteEnter(to, from, next) {
    next((that) => {
      const categorySlug = that.$route.params.slug;
      that.$store.dispatch('FETCH_PRODUCTS', { categorySlug });
    });
  },
};
</script>