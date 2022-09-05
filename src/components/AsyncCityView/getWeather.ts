import { useRoute } from "vue-router"
import axios from 'axios';
import { ref } from "vue";
import weatherType from "@/Types/weather";


const getWeather =  () => {
    const route = useRoute()
    const loading = ref(false);
    const weatherResult = ref<weatherType | null>(null);
    
    const getWeatherData = async () => {
        // const { state, city } = route.params;
        const { longitude, latitude } = route.query
        const api_key = 'd9e847e2bd4f83763ebd0187db1ddd74'
        try{
            loading.value = true
            const weatherData = await axios.get(`
                https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=emperial
            `)
            console.log(weatherData.data)


            weatherData.data ? loading.value = false : loading.value = true
            
             // cal current date & time
            const localOffset = new Date().getTimezoneOffset() * 60000;
            const utc = weatherData.data.current.dt * 1000 + localOffset;
            weatherData.data.currentTime = utc + 1000 * weatherData.data.timezone_offset;
            // cal hourly weather offset
            weatherData.data.hourly.forEach((hour: any) => {
                const utc = hour.dt * 1000 + localOffset;
                hour.currentTime = utc + 1000 * weatherData.data.timezone_offset;
            });


            weatherResult.value = weatherData.data;

        } catch(error) {
            loading.value = false
            console.log(error)
        }
    }

    // using closure algorithm to call the (getWeatherData()) function
    const x = getWeatherData()
    return { 
        route,
        getWeatherData,
        loading,
        weatherResult,
        x
    }
}

export default getWeather