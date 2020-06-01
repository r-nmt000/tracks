import axios from 'axios';
import {AsyncStorage} from "react-native";

const instance = axios.create({
  baseURL: 'http://40ba165e3c8d.ngrok.io'
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
