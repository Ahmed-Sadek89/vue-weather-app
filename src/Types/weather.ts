type weather = {
    description: string,
    icon: string,
    id: number,
    main: string,
}
type current = {
    dt: number,
    sunrise: number, 
    sunset: number, 
    temp: number, 
    feels_like: number,
    clouds: number,
    dew_point: number,
    humidity: number,
    pressure: number,
    uvi: number,
    visibility: number,
    weather: weather[],
    wind_deg: number,
    wind_gust: number,
    wind_speed: number
}
type weatherType = {
    current: current,
    currentTime: number | undefined,
    // daily: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}],
    // hourly: (48) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number
}

export default weatherType