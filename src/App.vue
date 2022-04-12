<template>
  <div>
    <Header />

    <!-- to work routes in main.js file -->

    <div class="ui container">
      <router-view></router-view>
    </div>
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
