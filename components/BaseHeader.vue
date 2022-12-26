<template>
  <header>
    <div
      class="flex border-box justify-between items-center pt-5.5 pr-6.875 pb-6.25 pl-6 md:pl-11.5 md:pr-12.75 pcm:pl-32.5 pcm:pr-25 pcm:py-5"
    >
      <div><img src="@/assets/images/header-devedge.png" /></div>
      <div class="flex-1 hidden pcm:flex header-options text-sm justify-end items-center leading-4">
        <span>About</span>
        <span
          ><span class="solutions">Solutions</span
          ><img class="w-3 inline-block ml-2" src="@/assets/images/Down-arrow.png"
        /></span>
        <span>IoT</span>
        <span>Open Source</span>
        <span>Support</span>
        <button class="involved mr-0 py-3 px-4 text-center">Get Involved</button>
      </div>
      <div class="right w-5.25 md:w-7.5 pcm:hidden"><img src="@/assets/images/menu.png" /></div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  components: {}, //导入的子组件要在此注册
  name: 'base-header', //当前组件的名字
  data() {
    return {} //可以定义数据及变量
  },
  mounted() {}, //页面初始化显示数据调用
  methods: {}, //存放方法
  computed: {}, //计算
  watch: {}, //监听
}
</script>

<style lang="postCss" scoped>
@import '@/assets/fonts/font.css';

.header-options {
  font-family: TeleNeo;
  font-style: normal;
  font-weight: 700;
  color: #000;
}

.header-options > span {
  @apply mr-12
}

.solutions {
  color: #E20074;
}

.involved {
  background: #E20074;
  color: #FFF;
  font-weight: 800;
}
</style>
