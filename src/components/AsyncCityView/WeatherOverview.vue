<template>
    <div class="weather-overview">
        <h1>{{route.params.city}}</h1>
        <h2>
            {{
            weatherResult?.currentTime && 
            new Date( weatherResult.currentTime ).toLocaleDateString(
                "en-us",
                {
                weekday: "short",
                day: "2-digit",
                month: "long",
                }) 
            }}
            {{
            weatherResult?.currentTime && 
            new Date( weatherResult.currentTime ).toLocaleTimeString(
                "en-us",
                {
                timeStyle: "short",
                })
            }}
        </h2>
        <h3>{{weatherResult && Math.round(weatherResult.current.temp)}}°</h3>
        <h4>
            feels like 
            {{weatherResult && Math.round(weatherResult.current.feels_like)}}°
        </h4>
        <h4>{{weatherResult?.current.weather[0].description}}</h4>
        <div>
            <img 
            :src="`http://openweathermap.org/img/wn/${weatherResult?.current.weather[0].icon}@2x.png`"
            :alt="`${weatherResult?.current.weather[0].main}`"
            />
        </div>
    </div>
</template>

<script lang="ts">
import weatherType from '@/Types/weather';
import { defineComponent, PropType } from 'vue'
import { useRoute } from 'vue-router';

export default defineComponent({
    props: {
        weatherResult: {
            type: Object as PropType<weatherType | null> | null
        }
    },
    setup () {
        
        const route = useRoute()
        return { route }
    }
})
</script>

<style scoped>

</style>