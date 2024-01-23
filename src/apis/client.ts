import axios from "axios";

const client = axios.create({
  baseURL: "https://open.api.nexon.com",
  timeout: 3000,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-nxopen-api-key":
      "test_760dd7575f03db5bdda1171af9fd554a35a80b5f253da545345beb340543f52796287a47ff9f351f2af3c48682841363",
  },
  responseType: "json",
});

export default client;
