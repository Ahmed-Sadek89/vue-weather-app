<template>
    <div class="container Weather-daily">
        <h1>7 day Forecast</h1>
        <div class="Weather-daily-content">
            <div
            class="Weather-this-day" 
            v-for="dayData in weatherResult?.daily"
            :key="dayData?.dt"
            >
            <div class="dayName">
                {{
                    dayData && 
                    new Date(dayData.dt * 1000).toLocaleDateString( "en-us", { weekday: "long" })
                }}
            </div>
            <div class="dayIcon">
                <img
                :src="`http://openweathermap.org/img/wn/${dayData?.weather[0].icon}@2x.png`"
                :alt="`${dayData?.weather[0].main}`"
                />
            </div>
            <div class="high-low">
                H: {{dayData && Math.round(dayData.temp.max)}}
                L: {{dayData && Math.round(dayData.temp.min)}}
            </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import weatherType, { dailyType } from '@/Types/weather';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: "WeatherDaily",
    props: {
        weatherResult: {
            type: Object as PropType<weatherType | null> | null
        },
        dayData: {
            type: Object as PropType<dailyType>
        }
    }
})
</script>

<style scoped>

</style>