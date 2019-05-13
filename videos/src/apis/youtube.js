import axios from 'axios';

const KEY = 'AIzaSyCKdZRGd3HQ6XulSYq2fwKotTIIwdgtlqU';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});