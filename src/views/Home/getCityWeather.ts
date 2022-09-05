import placesType from "@/Types/places"
import { useRouter } from "vue-router";

const getCityWeather = () => {
    const router = useRouter()
    const pushToCity = ( payload: placesType) => {
        const [ city, state ] = payload.place_name.split(', ');
        const longitude: number = payload.geometry.coordinates[0] //خطوط الطول
        const latitude: number = payload.geometry.coordinates[0] //دوائر العرض 
        const preview: string = "true"
        router.push({
            name: "City",
            params: { city, state },
            query: { longitude, latitude, preview }
        })
        // console.log({city, state, longitude, latitude, preview: Boolean(preview)})
    }
    return {
        pushToCity
    }
}

export default getCityWeather