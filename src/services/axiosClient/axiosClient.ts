import { GMDB_BASE_URL } from '@src/constants/links'
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: GMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default axiosClient
