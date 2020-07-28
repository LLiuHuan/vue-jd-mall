<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.like">
        <img :src="item.image" alt />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
// import Swiper from "components/common/swiper/Swiper";
// import Swiper from "components/common/swiper/SwiperItem";
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
</style>