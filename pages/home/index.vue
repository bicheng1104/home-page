<template>
  <div>
    <top-block />
    <div class="white-block">
      <div class="w-full pad-min:text-center" style="padding: 40px 24px; font-size: 14px; line-height: 20px">
        In a world caught up in dizzying processes and barriers to success, T-Mobile DevEdge is clearing the path for
        developers to bring their ideas to life. Whether you’re building an application for an enterprise solution or an
        IoT device for a startup, we are here to empower you to see it through to completion. And if our network
        capabilities can give you an edge, we want to connect you to it.
      </div>
      <div
        class="pad-min:text-center"
        style="height: 36px; font-weight: 800; font-size: 24px; line-height: 36px; padding: 0 24px"
      >
        Here’s how we can help.
      </div>
      <div
        class="w-full"
        style="display: flex; align-items: stretch; justify-content: center; flex-flow: row wrap; align-self: stretch"
      >
        <div class="panel-container xl:w-3/6" v-for="(item, index) in panelData" :key="item.uuid">
          <div class="w-full panel bg-gray-100" :class="generatePanelClassName(index)">
            <div class="inner-panel">
              <div class="panel-title pad-min:text-center">{{ item.title }}</div>
              <div class="panel-content pad-min:text-center">{{ item.content }}</div>
              <div class="panel-button-text pad-min:text-center">{{ item.buttonText }}</div>
              <img :src="'~/assets/images/' + item.imageUrl + '.png'" class="panel-image" :class="item.imageUrl" />
            </div>
          </div>
        </div>
      </div>
      <div class="pad-min:flex pad-min:justify-center pad-min:items-start">
        <div
          class="flex border-gray-200 border-solid phone-max:border-b-2 justify-center items-center pad-min:border-r-2 pad-min:flex-col pad-min:justify-start pad-min:w-2/6"
        >
          <img src="~/assets/images/more-to-come-in-2022.png" style="margin-right: 21px" />
          <img src="~/assets/images/rocket.png" />
        </div>
        <div class="des-share pad-min:w-4/6 pad-min:pl-16">
          <div class="next-year-des">
            Over the next year, we’ll be launching a sandbox environment and self-service options, plus solutions for:
          </div>
          <div
            v-for="item in nextYearTargets"
            :key="item.uuid"
            class="next-year-target pc-min:w-2/4 pc-min:inline-block"
          >
            {{ item.targetText }}
          </div>
          <div class="share-des">
            Interested in helping us develop new products and features? Tell us what we can do to help you access the
            best that T-Mobile has to offer. We want to meet your development needs, so share your thoughts with us
            today!
          </div>
          <div
            class="share-btn px-4 py-2 cursor-pointer focus:scale-110 focus:outline-none hover:bg-blue400 ease-in-out flex justify-center items-center"
          >
            Share you ideas
          </div>
        </div>
      </div>
      <div class="serve-title">We serve organizations across various verticals.</div>
      <div class="serve-des">
        Our customer collaborations have no limits. We’ve achieved shared success with businesses in multiple industries
        and we’re always ready to enter new markets.
      </div>
      <div class="customer-images">
        <img v-for="item in customerImages" :key="item.uuid" :src="require(`~/assets/images/${item.src}`)" />
      </div>
    </div>
    <div class="email pc-min:flex">
      <div class="pc-min:flex-1">
        <div class="signup-title">Sign up to learn about new products.</div>
        <div class="signup-des">
          In 2022, we’ll be launching a sandbox environment, self-service options, and various new products.
        </div>
      </div>
      <div class="signup-submit pad-min:flex pad-min:items-center pc-min:flex-1">
        <input class="signup-input w-3/6 phone-max:w-full pad-min:max-w-3xl" />
        <button class="signup-button w-2/6 phone-max:w-full phone-max:mt-4 pad-min:ml-4 pad-min:w-40">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { panelData, nextYearTargets, topData, customerImages } from './index.data'

export default Vue.extend({
  name: 'HomePage',
  layout: 'BaseLayout',
  data: () => ({
    topData,
    panelData,
    nextYearTargets,
    customerImages,
  }),
  methods: {
    generatePanelClassName: (index: number) =>
      index === 0 ? 'xl:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' : '',
  },
})
</script>

<style lang="css">
.mini-title {
  background: rgb(255 255 255 / 10%);
  border-radius: 4px;
}

.img1 {
  width: 100%;
  max-width: 920px;
  background: url('~/assets/images/GettyImages-1092342344.png') no-repeat;
  background-size: 100% auto;
}

.img1::before {
  content: '';
  display: block;
  padding-top: 100%;
}

.white-block {
  padding: 0 24px;
}

.panel-container {
  padding: 24px 0;
  gap: 10px;
  vertical-align: top;
  height: auto;
}

.panel-gradient {
  @apply bg-gradient-to-r from-purple-400 via-pink-500 to-red-500;
}

.panel {
  border-radius: 8px;
  height: 100%;
}

.inner-panel {
  padding: 88px 40px 40px;
}

.panel-title {
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 8px;
}

.panel-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
}

.panel-button-text {
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
}

.panel-image {
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  height: 136px;
}

.internet-of-things {
  background-image: url('~/assets/images/internet-of-things.png');
}

.open-source-projects {
  background-image: url('~/assets/images/open-source-projects.png');
}

.solutions {
  background-image: url('~/assets/images/solutions.png');
}

.line {
  height: 1px;
  background-color: #9b9b9b;
  margin: 29px auto 24px;
}

.next-year-des {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
}

.next-year-target {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  color: #262626;
}

.share-des {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 8px 0 40px;
  color: #000;
}

.share-btn {
  height: 56px;
  background: #e20074;
  margin-bottom: 40px;
}

.serve-title {
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  color: #262626;
  margin-bottom: 16px;
}

.serve-des {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000;
  margin-bottom: 40px;
}

.customer-images {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
}

.email {
  background: linear-gradient(90deg, #870b4a 0%, #e20074 100%);
  padding: 48px 24px 76px;
}

.signup-title {
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  margin-bottom: 8px;
}

.signup-des {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  margin-bottom: 24px;
}

.signup-input {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #6a6a6a;
  padding: 16px 0 16px 20px;
}

.signup-button {
  font-weight: 700;
  font-size: 18px;
  line-height: 56px;
  text-align: center;
  color: #fff;
  background: #000;
  height: 56px;
}
</style>
