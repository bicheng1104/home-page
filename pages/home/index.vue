<template>
  <div>
    <div class="welcome block relative text-white text-center w-full pt-20 pb-59 px-6 not-italic md:px-23.5 md:pb-106">
      <span class="mini-title font-bold rounded py-1 px-2 text-base leading-4">Welcome to T-Mobile DevEdge</span>
      <h1
        class="text-left text-2.5rem leading-tight font-extrabold pt-4 md:text-3rem md:text-center md:flex md:justify-center"
      >
        <span class="md:w-145">Where developers lead the way in innovation</span>
      </h1>
      <div
        class="text-left font-normal text-sm pt-6 pb-0 md:text-center md:text-base md:pt-2 md:flex md:justify-center"
      >
        <span class="md:w-145"
          >T-Mobile DevEdge makes it easy for developers to connect to our leading 5G network for building and
          optimizing inventive business solutions.</span
        >
      </div>
      <div class="flex justify-center absolute z-20 right-0 bottom-0 left-0 md:-bottom-18.5 pcm:-bottom-40">
        <img
          class="w-full welcome-fpo-image max-w-93.75 md:max-w-192 pcm:max-w-230"
          src="~/assets/images/GettyImages-1092342344.png"
        />
      </div>
      <div
        class="flex justify-center w-full overflow-x-hidden absolute z-10 top-15.25 left-1/2 transform -translate-x-1/2"
      >
        <img class="w-150 max-w-none md:w-300" src="@/assets/images/welcome-bg-img.png" />
      </div>
    </div>

    <div class="not-italic font-normal text-black px-6 md:px-6 pcm:px-32.5 mt-10 md:mt-38.5 pcm:mt-60">
      <div class="w-full text-sm flex justify-center md:text-base md:text-center pcm:px-50">
        <div class="md:w-169 pcm:w-195">
          In a world caught up in dizzying processes and barriers to success, T-Mobile DevEdge is clearing the path for
          developers to bring their ideas to life. Whether you’re building an application for an enterprise solution or
          an IoT device for a startup, we are here to empower you to see it through to completion. And if our network
          capabilities can give you an edge, we want to connect you to it.
        </div>
      </div>
      <h1 class="mt-10 mb-25 md:mt-30 md:mb-20 pcm:mb-29 md:text-center font-extrabold text-2xl leading-normal">
        Here’s how we can help.
      </h1>
      <div class="md:flex md:justify-center md:items-stretch md:flex-wrap" style="align-self: stretch">
        <div
          class="panel-container md:w-169 pcm:w-145"
          :class="`${index === 0 ? 'pcm:mr-5 pcm:text-white' : ''} ${
            index === 2 ? 'mb-0 md:mb-0 pcm:mb-0' : 'mb-29 md:mb-25 pcm:mb-5'
          }`"
          v-for="(item, index) in panelData"
          :key="item.uuid"
        >
          <div
            class="panel w-full h-full rounded-lg md:rounded-2xl relative p-10 pt-27 md:pt-56 bg-gray-100"
            :class="`${generatePanelClassName(index)} ${genPcPanelClass(index)} ${item.imageName}`"
          >
            <div class="inner-panel">
              <h1
                class="font-extrabold text-2xl leading-6 mb-2 md:text-center"
                :class="index === 0 ? 'pcm:text-white' : 'pcm:text-#262626'"
              >
                {{ item.title }}
              </h1>
              <div class="panel-content font-normal text-sm md:text-base md:text-center md:flex md:justify-center">
                <div class="md:w-149">{{ item.content }}</div>
              </div>
              <div
                class="text-black underline text-center font-extrabold text-base mt-6"
                :class="index === 0 ? 'pcm:text-white' : 'pcm:text-#262626'"
              >
                {{ item.buttonText }}
              </div>
            </div>
            <img :src="item.imageUrl" :class="genPanelImagePosClass(index)" class="panel-image absolute" />
          </div>
        </div>
      </div>
      <div class="mt-21.25 md:mt-18.75 pcm:mt-60 md:flex md:justify-center md:items-start">
        <div class="flex justify-center items-center md:flex-col md:justify-start">
          <img class="mr-5.25 md:mr-0 w-38 md:w-52.25 pcm:w-70" src="~/assets/images/more-to-come-in-2022.png" />
          <img class="w-38 md:w-57 md:mt-14 pcm:w-80 pcm:mt-3.75" src="~/assets/images/rocket.png" />
        </div>
        <hr class="mt-7.25 mb-6 w-81.75 h-0.5 bg-#9B9B9B md:mx-10 md:my-0 md:w-0.5 md:h-116 pcm:mx-15 pcm:mt-6" />
        <div class="md:w-90 md:text-base pcm:w-145 pcm:mt-6">
          <div class="text-sm mb-6 md:text-base">
            Over the next year, we’ll be launching a sandbox environment and self-service options, plus solutions for:
          </div>
          <div class="pc-solutions hidden text-xl pcm:flex text-#262626 tracking-0.0075em">
            <div class="pcm:w-80 pcm:mr-6">
              <div>Asset tracking</div>
              <div>Improved mobile customer interaction</div>
              <div>Autonomous vehicles</div>
              <div>A faster, easier, and more affordable certification process</div>
            </div>
            <div class="pcm:w-54">
              <div>XR enablement</div>
              <div>Supply chain management</div>
              <div>IoT Developer Kit</div>
            </div>
          </div>
          <div
            v-for="item in nextYearTargets"
            :key="item.uuid"
            class="text-lg leading-6 text-#262626 mb-4 md:text-xl md:mb-6 md:tracking-0.0075em pcm:hidden"
          >
            {{ item.targetText }}
          </div>
          <div class="text-sm md:text-base mt-6 mb-10 pcm:mb-16">
            Interested in helping us develop new products and features? Tell us what we can do to help you access the
            best that T-Mobile has to offer. We want to meet your development needs, so share your thoughts with us
            today!
          </div>
          <button
            class="text-white bg-#E20074 text-base py-5 md:px-10 px-28.125 leading-4 cursor-pointer flex justify-center items-center"
          >
            Share you ideas
          </button>
        </div>
      </div>
      <h1
        class="font-extrabold text-2xl leading-9 mt-10 md:mt-30 mb-4 text-#262626 md:text-center md:text-2rem md:leading-normal"
      >
        We serve organizations across various verticals.
      </h1>
      <div class="text-sm md:text-base md:text-center md:flex md:justify-center">
        <div class="md:w-180">
          Our customer collaborations have no limits. We’ve achieved shared success with businesses in multiple
          industries and we’re always ready to enter new markets.
        </div>
      </div>
    </div>
    <div class="mt-10 mb-20 md:hidden md:mt-14 px-4.5">
      <div class="w-full flex items-center mb-5">
        <div class="flex-1 flex justify-center"><img src="@/assets/images/finance.png" /></div>
        <div class="flex-1 flex justify-center"><img src="@/assets/images/technology.png" /></div>
        <div class="flex-1 flex justify-center"><img src="@/assets/images/retail.png" /></div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div class="flex items-center">
          <img class="w-25 mr-5" src="@/assets/images/communication.png" />
          <img class="w-25" src="@/assets/images/energy.png" />
        </div>
      </div>
    </div>
    <div class="hidden mt-10 md:mt-14 md:mb-30 px-4.5 md:flex justify-center">
      <div class="md:w-170 md:flex md:items-center">
        <img
          class="md:w-30"
          :class="index === 4 ? 'mr-0' : 'mr-5'"
          v-for="(item, index) in customerImages"
          :key="item.uuid"
          :src="require(`~/assets/images/${item.src}`)"
        />
      </div>
    </div>
    <div class="email px-6 pt-12 pb-14 pcm:flex pcm:px-32.5 py-12 md:pb-13 md:pl-11 md:pr-36 pcm:pb-12">
      <div class="pcm:w-120 pcm:mr-30">
        <div class="text-lg md:text-2xl text-white mb-2 font-extrabold leading-6 md:leading-normal">
          Sign up to learn about new products.
        </div>
        <div class="text-sm md:text-base mb-6 md:mb-10 pcm:mb-0 text-white md:font-normal md:w-120">
          In 2022, we’ll be launching a sandbox environment, self-service options, and various new products.
        </div>
      </div>
      <div class="signup-submit md:flex md:items-center">
        <input
          class="font-normal text-base tracking-tight border border-solid border-#9B9B9B w-81.75 py-4 pl-5 md:w-95 md:mr-5"
          placeholder="Email"
        />
        <button
          class="w-81.75 bg-black text-white text-lg leading-5 font-bold pt-4.75 pb-4.25 px-34.25 mt-4 md:mt-0 md:w-45 md:px-15.875"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { panelData, nextYearTargets, customerImages } from './index.data'

export default Vue.extend({
  name: 'HomePage',
  layout: 'BaseLayout',
  data() {
    return {
      panelData,
      nextYearTargets,
      customerImages,
    }
  },

  methods: {
    generatePanelClassName(index: number) {
      return index === 0 ? 'pcm:bg-gradient-to-t pcm:from-#870b4a pcm:to-#e20074 pcm:shadow-panel' : ''
    },
    genPcPanelClass(index: number) {
      switch (index) {
        case 0:
          return 'pcm:pt-50 pcm:pb-10'
        case 1:
          return 'pcm:pt-10 pcm:pb-62'
        case 2:
          return 'pcm:pt-10 pcm:pb-50'
      }
    },
    genPanelImagePosClass(index: number) {
      switch (index) {
        case 0:
          return 'w-47.5 md:w-71 left-1 -top-18 md:left-2/4 md:transform md:-translate-x-1/2 md:-top-9.5 pcm:-top-16.5'
        case 1:
          return 'w-40 md:w-56 right-5 -top-23.75 md:left-2/4 md:transform md:-translate-x-1/2 md:-top-18.25 pcm:transform-none pcm:-bottom-14.25 pcm:right-7 pcm:-translate-x-0 pcm:left-auto pcm:top-auto'
        case 2:
          return 'w-50 md:w-80 left-0 -top-16.25 md:left-2/4 md:transform md:-translate-x-1/2 md:-top-6 pcm:-bottom-18.5 pcm:top-auto'
      }
    },
  },
  destroyed() {
    // 组件销毁后解绑事件
    window.onresize = null
  },
})
</script>

<style lang="css">
.welcome {
  background: linear-gradient(#000, #fff);
}

.mini-title {
  background: rgb(255 255 255 / 10%);
}

.welcome-fpo-image {
  filter: drop-shadow(0 8px 16px rgb(0 0 0 / 25%));
}

.panel-container {
  gap: 10px;
  vertical-align: top;
  height: auto;
}

.panel-gradient {
  @apply bg-gradient-to-r from-purple-400 via-pink-500 to-red-500;
}

.pc-solutions > div > div {
  @apply pcm:mb-6;
}

.email {
  background: linear-gradient(90deg, #870b4a 0%, #e20074 100%);
}
</style>
