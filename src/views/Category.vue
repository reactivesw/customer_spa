<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
import { fetchProducts as apiFetchProducts } from '../store/api';

export default {
  data() {
    return {
      products: {},
    };
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
      apiFetchProducts(this.$store.state.route.params.id)
      .then((res) => {
        this.products = res.results;
      });
    },
  },
};
</script>