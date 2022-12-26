<template>
  <div>
    <div>
      <div
        class="block w-full text-white text-center w-full"
        style="padding-top: 80px; background: linear-gradient(black, #c4c4c4)"
      >
        <span class="mini-title">{{ topData.miniTitle }}</span>
        <div
          class="text-left pad-min:text-center"
          style="font-size: 40px; padding: 24px; padding-top: 20px; padding-bottom: 0"
        >
          {{ topData.title }}
        </div>
        <div class="text-left pad-min:text-center" style="font-size: 14px; padding: 24px">
          {{ topData.description }}
        </div>
      </div>
      <div class="flex justify-center">
        <img class="w-full" style="max-width: 940px" src="~/assets/images/GettyImages-1092342344.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { panelData, nextYearTargets, topData, customerImages } from '@/pages/home/index.data'

export default Vue.component('top-block', {
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

<style lang="postCss" scoped>
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
</style>
