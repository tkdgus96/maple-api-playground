import axios from "axios";

const client = axios.create({
  baseURL: "https://open.api.nexon.com",
  timeout: 3000,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-nxopen-api-key":
      import.meta.env.MODE === "development"
        ? import.meta.env.VITE_API_KEY
        : process.env.API_KEY,
  },
  responseType: "json",
});

export default client;
