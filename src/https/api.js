import axios from "axios"
export const api = axios.create({
    baseURL:'https://motion-food.herokuapp.com'
})