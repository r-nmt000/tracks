import axios from 'axios';
import {AsyncStorage} from "react-native";

const instance = axios.create({
  baseURL: 'http://04d8220df902.ngrok.io'
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Baerer ${token}`;
    }
    return config;
  },
  (err) => {}
);

export default instance;
