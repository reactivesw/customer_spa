<template>
  <div>
    <layout-navbar></layout-navbar>
    <router-view></router-view>
    <layout-footer></layout-footer>
  </div>
</template>

<style src="./styles/main.scss" lang="scss"></style>

<script>
  import LayoutNavbar from './components/Navbar';
  import LayoutFooter from './components/Footer';

  export default {
    components: {
      LayoutNavbar,
      LayoutFooter,
    },
  };
</script>
