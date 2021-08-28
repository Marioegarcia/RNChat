import axios from "axios";
import { Platform } from "react-native";

// const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2:8080' : 'http://localhost';

const baseUrl = 'http://192.168.1.6:8080/api'

// const baseUrl = 'http://192.168.1.1:8080'
export const api = axios.create({
    baseURL: baseUrl,
   
})


