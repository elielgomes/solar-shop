import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
