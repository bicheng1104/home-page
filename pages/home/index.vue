<template>
    <div class="container flex itmes-center justify-center">
        <button onclick="console.log('button has been click')" class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Click me
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PanelData } from './index.types';

const panelData: PanelData[] = [{
  title: 'test1'
}]

console.log(panelData)

export default Vue.extend({
  name: 'HomePage',
})
</script>
