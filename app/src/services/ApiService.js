// services/ApiService.js

import axios from "axios";
import API_BASE_URL from "./config";

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },
  
  get(resource) {
    return axios
      .get(API_BASE_URL+resource)
      .then((response) => response)
      .catch((error) => error.response);
  },

};

export default ApiService;
