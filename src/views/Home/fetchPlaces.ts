import placesType from "@/Types/places";
import axios from "axios";
import { ref } from "vue"


const fetchPlaces = () => {

    const access_token= "pk.eyJ1Ijoic2FkZWs4OSIsImEiOiJjbDduYndnOWwwMmMzM3VvMTd3ZGQxazFuIn0.OSICzi7ZBopJD4_ohtipeA"
    const types = "place"

    const placesResultData = ref<placesType[]>([])
    const queryTimeOut = ref<any>(null);
    
    const placesResultCallback = (payload: string) => {
        // clearTimeout => remove the result of setTimeout
        clearTimeout(queryTimeOut.value) // for clean the value of the last result and start getting new values according to your search
        console.log(payload)
        queryTimeOut.value = setTimeout( async () => {
            if ( payload !== '' ) {
                const res = await axios.get(`
                    https://api.mapbox.com/geocoding/v5/mapbox.places/${payload}.json?access_token=${access_token}&types=${types}`
                )
                placesResultData.value = res.data.features 
            } else{
                placesResultData.value = []
            }
        }, 1000)
    }

    return {
        placesResultData,
        placesResultCallback
    }
}

export default fetchPlaces