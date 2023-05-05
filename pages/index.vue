<template>
  <div class="map-container">
    <ClientOnly>
      <ElAmap></ElAmap>
    </ClientOnly>
  </div>
</template>

<script setup>
import {initMapApi} from "~/util/mapLoadUtil";
import {onBeforeMount} from 'vue';
import {ElAmap} from "@vuemap/vue-amap";

onBeforeMount(() => {
  initMapApi()
})
</script>

<style scoped>
.map-container{
  height: 500px;
}
</style>
