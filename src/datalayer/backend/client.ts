import axios from "axios";

const backendAPIKey = process.env.ANDIE_LABS_WEB_BACKEND_API_KEY;

axios.defaults.headers.common['Authorization'] = `Bearer ${backendAPIKey}`;

export default axios;