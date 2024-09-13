import axios from 'axios'

export const instance = axios.create({
  baseURL: 'localhost:8000/api',
  timeout: 1000,
  headers: {},
})
