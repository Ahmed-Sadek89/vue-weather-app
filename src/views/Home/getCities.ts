import { ref } from "vue"
import savedCity from '@/Types/savedCity';
import axios from "axios";


const getCities = async () => {
    const apiKey = 'd9e847e2bd4f83763ebd0187db1ddd74'
    //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d9e847e2bd4f83763ebd0187db1ddd74&units=emperial
    // 1- get localStorage Data in variable called citiesInLS
    const citiesInLS = ref< savedCity[] >([]);
    if( localStorage.getItem('savedCities') ) { 
        citiesInLS.value = JSON.parse( localStorage.getItem('savedCities') || '' )
    }

    // 2- fill resopnse array with data have same long and lat in citiesInLS;
    const resopnse: any[] = [];
    citiesInLS.value.forEach((city) => {
        // const isInLS = resopnse.find( => city.id)

        console.log('latitude ',city.coordinate.latitude)
        resopnse.push(
            axios.get(`
                https://api.openweathermap.org/data/2.5/weather?lat=${city.coordinate.latitude}&lon=${city.coordinate.longitude}&appid=${apiKey}&units=emperial
            `)
        )
    })

    const weatherData = await Promise.all(resopnse)

    return weatherData.forEach((value, index) => {
        // console.log(value.data)
        citiesInLS.value[index].weather = value.data 
        localStorage.setItem('savedCities', JSON.stringify(citiesInLS.value))
    })
}

export default getCities