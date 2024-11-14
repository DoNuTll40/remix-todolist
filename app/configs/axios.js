import axios from "axios";

// axios.defaults.baseURL = `https://api.donut-ll40.me/api/v1`
axios.defaults.baseURL = `http://localhost:8000/api/v1`
axios.defaults.withCredentials = true;

export default axios;