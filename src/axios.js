import axios from "axios";

const instance = axios.create({
  baseURL: "...", //The API(Firebase Cloud Function)URL
});
export default instance;
