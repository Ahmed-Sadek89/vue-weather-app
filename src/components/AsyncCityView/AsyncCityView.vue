<template>
  <div v-if="loading" class="text-center">
    loading
  </div>
  <div v-else class="city-view">
    <!-- Weather Overview -->
    <WeatherOverview :weatherResult="weatherResult" />
    <hr class="hr"/>
    <!-- Weather hourly -->
    <WeatherHourly :weatherResult="weatherResult" />
    <hr class="hr"/>
    <!-- Weather daily -->
    <WeatherDaily :weatherResult="weatherResult" />
  </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'
import weatherType, { dailyType } from "@/Types/weather";
import './Styles.css'
import { useRoute } from 'vue-router';
import WeatherOverview from './WeatherOverview.vue';
import WeatherHourly from './WeatherHourly.vue';
import WeatherDaily from './WeatherDaily.vue';

export default defineComponent({
  name: "AsyncCityView",
  props: {
    loading: {
      required: true,
      type: Boolean
    },
    weatherResult: {
      type: Object as PropType<weatherType | null> | null
    }
  },
  setup() {
    const route = useRoute();
    return { route };
  },
  components: { WeatherOverview, WeatherHourly, WeatherDaily }
})
</script>
