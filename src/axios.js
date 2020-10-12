import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-c35e9/us-central1/api", //The API(Firebase Cloud Function)URL
});
export default instance;
