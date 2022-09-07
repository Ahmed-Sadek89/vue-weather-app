import { LocationQueryValue } from "vue-router"

type savedCity = {
    id: string | undefined,
    city: string[] | string | undefined,
    state: string[] | string | undefined,
    weather: any | {
        coord: {
            lat: number,
            lon: number
        },
        main: {
            temp: number,
            temp_max: number,
            temp_min: number
        }
    },
    coordinate: {
        longitude: LocationQueryValue | LocationQueryValue[] | undefined,
        latitude: LocationQueryValue | LocationQueryValue[] | undefined
    }
}

export default savedCity