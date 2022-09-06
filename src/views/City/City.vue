<template>
    <div>
        <Tracker />
        <AsyncCityView
            :loading="loading"
            :weatherResult="weatherResult"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsyncCityView from '@/components/AsyncCityView/AsyncCityView.vue';
import Tracker from '@/components/Tracker/Tracker.vue';
import getWeather from './getWeather';

export default defineComponent({
    setup () {
        const { 
            route,
            getWeatherData,
            loading,
            weatherResult
        } = getWeather();
        route.params.city && getWeatherData();
        console.log(weatherResult)
        return { 
            getWeatherData, 
            loading, 
            weatherResult
        };
    },
    components: { AsyncCityView, Tracker }
})
</script>

<style scoped>

</style>