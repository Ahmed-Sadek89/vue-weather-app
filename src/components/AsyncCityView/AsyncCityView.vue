<template>
  <div>
    <div v-if="loading" class="text-center">
      loading
    </div>
    <div class="text-center" v-if="error">
      something went wrong
    </div>
    <div v-if="weatherResult" class="city-view">
      <!-- Weather Overview -->
      <WeatherOverview :weatherResult="weatherResult"  />
      <hr class="hr"/>
      <!-- Weather hourly -->
      <WeatherHourly :weatherResult="weatherResult" />
      <hr class="hr"/>
      <!-- Weather daily -->
      <WeatherDaily :weatherResult="weatherResult"  />
    </div>
    <div 
      v-if="cityList && weatherResult" 
      class="text-lg pt-10 pb-16 flex flex-row justify-center items-center"
      @click="removeCityFromLS"
    >
      <i class="fa-solid fa-trash cursor-pointer"></i>
      <h1 class="cursor-pointer">
        remove city
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'
import weatherType from "@/Types/weather";
import './Styles.css'
import { useRoute, useRouter } from 'vue-router';
import WeatherOverview from './WeatherOverview.vue';
import WeatherHourly from './WeatherHourly.vue';
import WeatherDaily from './WeatherDaily.vue';
import savedCity from '@/Types/savedCity';

export default defineComponent({
  name: "AsyncCityView",
  props: {
    loading: {
      required: true,
      type: Boolean
    },
    error: {
      required: true,
      type: Boolean
    },
    weatherResult: {
      type: Object as PropType<weatherType | null> | null
    }
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const cityList = route.query.cityList;

    const removeCityFromLS = () => {
      // 1- remove the city from LS
      const citiesInLS = localStorage.getItem('savedCities') && JSON.parse( localStorage.getItem('savedCities') || '' )
      const updatedCitiesInLS = citiesInLS.filter((index:savedCity) => {
        return index.id !== route.query.cityList
      })
      localStorage.setItem('savedCities', JSON.stringify(updatedCitiesInLS))

      // 2- push me to homepage
      router.push({ name: 'home' })
    }

    return {
      cityList,
      removeCityFromLS,
    };
  },
  components: { WeatherOverview, WeatherHourly, WeatherDaily }
})
</script>
