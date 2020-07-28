<template>
  <div class="goods-list">
    <goods-list-item class="item" v-for="item in goods" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    // console.log(this.goods);
  },
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
  /* justify-content: space-evenly; */
}

.goods-list .item {
  width: 48%;
}
</style>