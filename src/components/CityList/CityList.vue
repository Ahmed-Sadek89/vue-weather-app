<template>
    <div v-if="citiesInLS.length === 0">
        no location added. to start tracking a location, search in the field above
    </div>
    <div 
        className="cityList" 
        v-else
        v-for="city in citiesInLS"
        :key="city.id"
    >
        <div v-show="city.weather !== null">
            <div class="cityCard" @click="goToCityView(city)">
                <div class="left">
                    <p class="cityName">{{city.city}}</p>
                    <p class="cityState">{{city.state }}</p>
                </div>
                <div class="right">
                    <p class="cityDeg" > {{ Math.round(city.weather.main.temp) }}°</p>

                    <p class="minMax">
                        <span>
                            H:
                            {{ Math.round(city.weather.main.temp_max) }}°
                        </span>
                        <span>
                            L:
                            {{ Math.round(city.weather.main.temp_min) }}°
                        </span>
                    </p>
                </div>
            </div> 
        </div>
    </div>
</template>

<script lang="ts">
import savedCity from '@/Types/savedCity';
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router';
import './Styles.css';


export default defineComponent({
    name: "CityList",
    props: {
        city: {
            type: Object as PropType<savedCity>
        }
    },
    setup () {
        const citiesInLS: savedCity[] = 
        localStorage.getItem('savedCities') !== null 
        ? JSON.parse( localStorage.getItem('savedCities') || '' )
        : []
        // console.log(citiesInLS)

        const router = useRouter()
        const goToCityView = (city: savedCity) => {
            router.push({
                name: 'City',
                params: { 
                    city:city.city,
                    state: city.state 
                },
                query: {
                    longitude: city.weather.coord.lon,
                    latitude : city.weather.coord.lat,
                    cityList: city.id
                }
            })
        }
        return {
            citiesInLS,
            goToCityView
      }
    }
})
</script>

<style scoped>

</style>