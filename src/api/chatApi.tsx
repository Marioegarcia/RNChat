import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const baseURL = 'http://192.168.1.6:8080/api';  

const chatApi = axios.create({baseURL});

chatApi.interceptors.request.use(
    async(config)=>{
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers['x-token'] = token;
        }
        return config;
    }
)

export default chatApi;