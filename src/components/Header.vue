<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image storage</router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a href="#" class="item" @click="logout">Logout</a>
      </div>

      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout']),
  // methods: {
  //   ...mapActions(['login']),

  //   // define other methods here
  // },
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
