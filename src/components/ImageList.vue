<template>
  <div v-if="isLoggedIn" class="image-container">
    <img v-for="image in allImages" :key="image.id" :src="image.link" />
  </div>

  <div v-else>Please Login to the app</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  methods: mapActions(['fetchImages']),
  create() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>
