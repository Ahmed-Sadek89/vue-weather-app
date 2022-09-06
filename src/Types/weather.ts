type weather = {
    description: string,
    icon: string,
    main: string,
}
type current = {
    dt: number,
    temp: number, 
    feels_like: number,
    weather: weather[],
}
export type hourly = {
    dt: number,
    temp: number,
    currentTime: number,
    visibility: number,
    weather: weather[],
}
export type dailyType = {
    dt : number,
    weather: weather[],
    temp: {
        min: number,
        max: number
    }
}
type weatherType = {
    current: current,
    currentTime: number ,
    daily: dailyType[],
    hourly: hourly[],
    lat: number,
    lon: number,
}

export default weatherType