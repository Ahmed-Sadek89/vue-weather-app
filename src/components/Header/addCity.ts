import savedCity from "@/Types/savedCity";
import { uid } from "uid";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const addCity = () => {
    const router = useRouter();
    const route = useRoute();

    const savedCity = ref<savedCity[]>([]) 

    const addCityToLS = () => {
        // 0- set the localStorage values to savedCity
        if( localStorage.getItem('savedCities') ) {
            savedCity.value = 
            JSON.parse(localStorage.getItem('savedCities') || '')
        }

        // 1- put all city info in object
        const locationOBJ: savedCity = {
            id: uid(),
            city: route.params.city,
            state: route.params.state,
            coordinate: {
                longitude: route.query.longitude,
                latitude: route.query.latitude
            },
            weather: {}
        }

        // 2- set the new city to localStorage 
        savedCity.value.push(locationOBJ)
        localStorage.setItem(
            'savedCities',
            JSON.stringify(savedCity.value)
        )

        // 3- remove preview query from router
        const cityList = { cityList : uid()}
        const query = Object.assign({}, route.query, cityList);
        delete query.preview;
        router.replace({ query })

    }
  return { addCityToLS, savedCity }
}

export default addCity