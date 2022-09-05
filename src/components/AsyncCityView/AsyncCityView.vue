<template>
    <div v-if="loading">
        loading
    </div>
    <div v-else>
        <h1>{{route.params.city}}</h1>
        <p>{{weatherResult?.current.feels_like}}</p>
        <p class="text-sm mb-12">
          {{
            new Date( weatherResult?.currentTime || new Date() ).toLocaleDateString(
              "en-us",
              {
                weekday: "short",
                day: "2-digit",
                month: "long",
              }
            )
          }}
            {{
              new Date( weatherResult?.currentTime || new Date() ).toLocaleTimeString(
                "en-us",
                {
                  timeStyle: "short",
                }
              )
            }}
        </p>
        <p>{{weatherResult && Math.round(weatherResult?.current.temp)}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import getWeather from './getWeather';

export default defineComponent({
    name: "AsyncCityView",
    setup () {
        const { getWeatherData, loading, weatherResult, route } = getWeather();
        route.params && route.query ? getWeatherData() : null
        
        return { 
          weatherResult, 
          loading, 
          route,
          // getCurrentDate
        };
    }
})
</script>

<style scoped>

</style>