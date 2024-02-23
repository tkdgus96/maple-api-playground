import axios from "axios";

const client = axios.create({
  baseURL: "https://open.api.nexon.com",
  timeout: 3000,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-nxopen-api-key":
      "live_760dd7575f03db5bdda1171af9fd554ae18d2e3d35959fb50467974b08ac7625ffaa9978cb4c6a7d9fab4c6f9fcb8bc4",
  },
  responseType: "json",
});

export default client;
