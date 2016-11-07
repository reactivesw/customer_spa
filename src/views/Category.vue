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
      this.$Progress.start();
      this.$Progress.set(20);
      apiFetchProducts(this.$store.state.route.params.id)
      .then((res) => {
        this.products = res.results;
        this.$Progress.finish();
      });
    },
  },
};
</script>