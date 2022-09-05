<template>
  <main class="container">
    <MapBox
      :placesResultData="placesResultData"
      @placesResultfn="placesResultCallback"
      @pushToCityFn="pushToCity"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fetchPlaces from './fetchPlaces'
import MapBox from '@/components/MapBox/MapBox.vue';
import getCityWeather from './getCityWeather';

export default defineComponent({
    name: "Home",
    components: { MapBox },
    setup() {
      const { placesResultData, placesResultCallback } = fetchPlaces()
      const { pushToCity } = getCityWeather()
      return { placesResultData, placesResultCallback, pushToCity }
    }
});
</script>
