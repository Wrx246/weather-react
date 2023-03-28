import { useState } from "react"


export const useLocation = () => {
    const lat = navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
    })

    const lon = navigator.geolocation.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude)
    })
    const [latitude, setLatitude] = useState(lat);
    const [longitude, setLongitude] = useState(lon);

    return [latitude, longitude]
}