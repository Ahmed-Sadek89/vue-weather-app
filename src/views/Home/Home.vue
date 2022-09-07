<template>
  <main class="container">
    <MapBox
      :placesResultData="placesResultData"
      @placesResultfn="placesResultCallback"
      @pushToCityFn="pushToCity"
    />
    <CityList />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fetchPlaces from './fetchPlaces';
import MapBox from '@/components/MapBox/MapBox.vue';
import getCityWeather from './getCityWeather';

import CityList from '../../components/CityList/CityList.vue';

export default defineComponent({
    name: "Home",
    components: { MapBox, CityList },
    setup() {
      const { placesResultData, placesResultCallback } = fetchPlaces()
      const { pushToCity } = getCityWeather();
      return { 
        placesResultData, 
        placesResultCallback, 
        pushToCity,
      }
    }
});
</script>
