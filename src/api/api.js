import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`,
})
const apiKey = '4ec2127250fed4378562499a3e5ca3a8';


export const GetReq = (lat, lon) => {
    return instance.get(`weather?lat=${lon}&lon=${lat}&appid=${apiKey}&units=metric&lang=ru`)
}
export const GetCity = (name)  => {
    return instance.get(`weather?q=${name}&appid=4ec2127250fed4378562499a3e5ca3a8&units=metric&lang=ru`)
}