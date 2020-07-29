<template>
  <div class="wrapper" ref="aaa">
    <ul>
      <li>分类列表1</li>
      <li>分类列表2</li>
      <li>分类列表3</li>
      <li>分类列表4</li>
      <li>分类列表5</li>
      <li>分类列表6</li>
      <li>分类列表7</li>
      <li>分类列表8</li>
      <li>分类列表9</li>
      <li>分类列表10</li>
      <li>分类列表11</li>
      <li>分类列表12</li>
      <li>分类列表13</li>
      <li>分类列表14</li>
      <li>分类列表15</li>
      <li>分类列表16</li>
      <li>分类列表17</li>
      <li>分类列表18</li>
      <li>分类列表19</li>
      <li>分类列表20</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  name: "Category",
  data() {
    return {
      isPullUpLoad: false,
    };
  },
  created() {
    this.bscroll = null;
  },
  mounted() {
    this.initBScroll();
  },
  methods: {
    initBScroll() {
      this.bscroll = new BScroll(document.querySelector(".wrapper"), {
        scrollY: true,
        pullUpLoad: true,
        probeType: 3,
      });

      this.bscroll.on("scroll", (position) => {
        // console.log(position);
      });

      this.bscroll.on("pullingUp", () => {
        this.isPullUpLoad = true;

        console.log("下拉刷新完毕！");
        this.bscroll.finishPullUp();
        this.bscroll.refresh();

        this.isPullUpLoad = false;
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: red;

  overflow: hidden;
}
</style>