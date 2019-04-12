import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 49f1f16fd95b65bae098743d955e53b88ce9c23c6d3bf7074befa073a9609e79'
  }
});