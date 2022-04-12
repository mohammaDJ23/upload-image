<template>
  <div>
    <Header />

    <!-- to work routes in main.js file -->

    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
