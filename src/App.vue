<template>
  <div>
    <layout-navbar></layout-navbar>
    <router-view></router-view>
    <layout-footer></layout-footer>

    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

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
