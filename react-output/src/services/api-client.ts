import axios from 'axios';
import { config } from '../utils/config';

const apiClient = axios.create({
  baseURL: `/${config.apiUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
