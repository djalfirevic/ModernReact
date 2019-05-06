import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f04a36f0f533f7e418833a589d7e100cd96d1622d273cc37266a31cda120c85b"
  }
});
