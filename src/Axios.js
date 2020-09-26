import axios from "axios";

const instance = axios.create({
    // the API (cloud function) URL
  baseURL: "https://us-central1-clone-e32d8.cloudfunctions.net/api",
  // 'http://localhost:5001/clone-e32d8/us-central1/api'
});

export default instance;


