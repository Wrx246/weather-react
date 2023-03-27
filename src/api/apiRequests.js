import { API, api_key } from "./apiConfig"


export const getWeather = async (latitude, longitude, type) => {
    const response = await API.get(`${type}?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`)
    return response
}

export const searchWeather = async (search) => {
    const response = API.get(`weather?q=${search}&units=metric&appid=${api_key}`)
    return response
}