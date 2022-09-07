<template>
    <div>
        <Tracker />
        <AsyncCityView
            :loading="loading"
            :weatherResult="weatherResult"
            :error="error"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsyncCityView from '@/components/AsyncCityView/AsyncCityView.vue';
import Tracker from '@/components/Tracker/Tracker.vue';
import getWeather from './getWeather';

export default defineComponent({
    name: "City",
    setup () {
        const { 
            route,
            getWeatherData,
            loading,
            weatherResult,
            error
        } = getWeather();
        route.params.city && getWeatherData();
        // console.log(weatherResult)
        return { 
            getWeatherData, 
            loading, 
            weatherResult,
            error
        };
    },
    components: { AsyncCityView, Tracker }
})
</script>

<style scoped>

</style>