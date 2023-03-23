<template>
  <div class="map-container">
    <ClientOnly>
      <ElAmap v-if="mapAPILoaded"></ElAmap>
    </ClientOnly>
  </div>
</template>

<script setup>
import {initMapApi} from "~/util/map";
import {onBeforeMount, ref} from 'vue';
import {ElAmap} from "@vuemap/vue-amap";

const mapAPILoaded = ref(false)

onBeforeMount(async () => {
  await initMapApi()
  mapAPILoaded.value = true
})
</script>

<style scoped>
.map-container{
  height: 500px;
}
</style>
