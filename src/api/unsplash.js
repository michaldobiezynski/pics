import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID dx_QfP7jH_L_ZNwpjnSnzcsqd7kWADNn7h-8XMyfr0c',
  },
});
