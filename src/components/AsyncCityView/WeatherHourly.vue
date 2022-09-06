<template>
    <div class="container Weather-hourly">
        <h1>Weather hourly</h1>
        <div class="hourly-contents">
            <div class="each-hour" v-for="hourData in weatherResult?.hourly" :key="hourData?.dt">
            <h1>
                {{
                hourData &&
                new Date(hourData.currentTime).toLocaleTimeString('en-us', {hour: "numeric"})
                }}
            </h1>
            <img 
                :src="`http://openweathermap.org/img/wn/${hourData?.weather[0].icon}@2x.png`"
                :alt="`${hourData?.weather[0].icon}`"
            />
            <p>{{hourData && Math.round(hourData.temp)}}°</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import weatherType, { hourly } from "@/Types/weather";

export default defineComponent({
    name: "WeathrHourly",
    props: {
        
        weatherResult: {
            type: Object as PropType<weatherType | null> | null
        },
        hourData :{
            type: Object as PropType<hourly>
        }
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>