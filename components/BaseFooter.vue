<template>
  <footer
    class="bg-black text-white p-12 pb-14 md:px-11.5 md:pt-15 md:pb-10 pcm:pt-13.5 pcm:pb-15.5 pcm:pl-57.5 pcm:pr-22.75"
  >
    <div class="mb-8.75 pcm:mb-7.75">
      <img class="w-35" src="@/assets/images/devedge.png" />
    </div>
    <div class="footer-titles flex font-extrabold text-base tracking-0.02em md:hidden">
      <div class="w-31">
        <div class="mb-4">About</div>
        <div class="mb-4">Open Source</div>
        <div>Log In</div>
      </div>
      <div class="w-38.75">
        <div class="mb-4">Contact</div>
        <div>IoT (Internet of Things)</div>
      </div>
    </div>
    <div class="devedge md:flex md:align-start md:justify-between font-extrabold tracking-0.02em">
      <div class="devedge-col-about w-full hidden md:block">
        <div>About</div>
        <div>IoT (Internet of Things)</div>
        <div>Open Source</div>
        <div>Contact</div>
        <div class="mb-0">Log In</div>
      </div>
      <div class="devedge-col w-full">
        <div>Solution</div>
        <div>Fraud Prevention</div>
        <div>Call Verification</div>
        <div>5G Location Services</div>
        <div>Enhanced Caller ID</div>
        <div>IoT Developer Kit</div>
      </div>
      <div class="devedge-col w-full">
        <div>Terms</div>
        <div>Privacy Center</div>
        <div>Privacy Policy</div>
        <div>Fraud Prevent Data Use Policy</div>
        <div>Terms & Conditions</div>
        <div>Do Not Sell My Data</div>
      </div>
      <div class="devedge-col w-full">
        <div>Support</div>
        <div>General FAQ</div>
        <div>API documentation</div>
        <div>IoT documentation</div>
        <div>Open Source documentation</div>
      </div>
    </div>
    <div class="mt-12 md:mt-10 flex justify-between items-start">
      <div class="w-39 text-sm leading-loose md:hidden">
        <div>Copyright © 2022 T-Mobile.</div>
        <div>All Rights Reserved.</div>
      </div>
      <div class="hidden md:block">Copyright © 2022 T-Mobile.All Rights Reserved.</div>
      <div class="text-sm leading-4 md:flex md:items-center">
        <img class="md:mr-4" src="@/assets/images/twitter.png" /><span class="hidden md:inline"
          >Follow us on Twitter</span
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  components: {}, //导入的子组件要在此注册
  name: 'base-footer', //当前组件的名字
  methods: {}, //存放方法
  computed: {}, //计算
  watch: {}, //监听
}
</script>

<style scoped lang="postCss">
.devedge > div {
  @apply md:w-36
}

.devedge-col {
  @apply mr-12 font-normal
}

.devedge-col:last-child {
  @apply mr-0
}

.devedge-col > div {
  @apply mb-2 text-#F2F2F2;
}

.devedge-col-about > div {
  @apply mb-6
}

.devedge-col > div:first-child {
  @apply  text-white text-base font-extrabold tracking-0.02em mb-4 mt-8 w-full md:mt-0
}
</style>
