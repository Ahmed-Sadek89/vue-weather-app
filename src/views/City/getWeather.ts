import { RouteLocationNamedRaw, RouteLocationPathRaw, RouteLocationRaw, useRoute, useRouter } from "vue-router"
import axios from 'axios';
import { ref } from "vue";
import weatherType from "@/Types/weather";


const getWeather =  () => {
    const route = useRoute()
    const router = useRouter();

    const loading = ref<boolean>(false);
    const weatherResult = ref<weatherType | null>(null);
    const error = ref<boolean>(false);

    const { longitude, latitude } = route.query;

    const api_key = 'd9e847e2bd4f83763ebd0187db1ddd74';

    const getWeatherData = async () => {
        loading.value = true;
        
        try{
            const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=emperial`)
            // console.log(weatherData.data)
            weatherData.data ? loading.value = false : null  
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

        } catch(err) {
            loading.value = false;
            error.value = true
            const errorRoute = { error: true }
            const query = Object.assign({}, route.query, errorRoute);
            delete query.preview;
            delete query.longitude;
            delete query.latitude;
            router.replace({ query })
        }
    }
    
    return { 
        route,
        getWeatherData,
        loading,
        weatherResult,
        error
    }
}

export default getWeather