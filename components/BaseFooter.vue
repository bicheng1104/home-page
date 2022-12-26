<template>
  <div class="bottom">
    <div class="logo">
      <img src="~/assets/images/devedge.png" />
    </div>
    <div class="devedge-content pad-min:flex pad-min:align-start pad-min:justify-between">
      <div class="edges devedge-item w-full devedge-content-title">
        <div class="phone-max:w-2/6 phone-max:inline-block">About</div>
        <div class="phone-max:w-2/6 phone-max:inline-block">Contact</div>
        <div class="phone-max:w-2/6 phone-max:inline-block">Open Source</div>
        <div class="phone-max:w-2/6 phone-max:inline-block">IoT (Internet of Things)</div>
        <div class="phone-max:w-2/6 phone-max:inline-block">Log In</div>
      </div>
      <div class="solution devedge-item w-full">
        <div class="devedge-content-title">Solution</div>
        <div>Fraud Prevention</div>
        <div>Call Verification</div>
        <div>5G Location Services</div>
        <div>Enhanced Caller ID</div>
        <div>IoT Developer Kit</div>
      </div>
      <div class="terms devedge-item w-full">
        <div class="devedge-content-title">Terms</div>
        <div>Privacy Center</div>
        <div>Privacy Policy</div>
        <div class="">Fraud Prevent Data Use Policy</div>
        <div>Terms & Conditions</div>
        <div>Do Not Sell My Data</div>
      </div>
      <div class="support devedge-item w-full">
        <div class="devedge-content-title">Support</div>
        <div>General FAQ</div>
        <div>API documentation</div>
        <div>IoT documentation</div>
        <div>Open Source documentation</div>
      </div>
    </div>
    <div>
      <div>
        <div>Copyright © 2022 T-Mobile.</div>
        <div>All Rights Reserved.</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {}, //导入的子组件要在此注册
  name: 'base-footer', //当前组件的名字
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
.bottom {
  background: #000;
  padding: 48px;
}

.logo {
  margin-bottom: 32px;
}

.devedge-content {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #f2f2f2;
}

.devedge-content-title {
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #fff;
}

.devedge-item {
  margin-bottom: 32px;
  box-sizing: border-box;
  padding: 0 0.5em;
}

.devedge-item > div {
  margin: 0.5em auto;
}
</style>
