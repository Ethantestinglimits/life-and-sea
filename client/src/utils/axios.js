import axios from "axios";

import baseURL from "@config/connection";

const axiosInstances = {
  axiosAdmin: axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${process.env.ADMIN_JWT_SECRET}`,
    },
  }),

  axiosPublic: axios.create({
    baseURL,
  }),
};

axiosInstances.axiosPublic.interceptors.request.use(
  async (config) => {
    token = await AsyncStorage.getItem("token");

    if (token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // PROTOCOLE HASH (SI GET, CONTIENT DEJA LES ARGUMENTS)
    let url = config.baseURL + config.url;
    try {
      if (config.method == "post") {
        url = url + "?";
        // POST, AJOUT DES ARGUMENTS A L'URL
        for (const [key, value] of config.data._searchParams) {
          if (key != "hash") {
            const text = value.toString().replace("+", " ");
            console.log(text);
            url = url + key + "=" + text + "&";
          }
        }
      } else {
        url = config.params != undefined ? url + "&" : url + "?";
      }

      url = url + "secret=" + Config.REACT_APP_API_KEY;
      console.log(url);
      let hash = await RNSimpleCrypto.SHA.sha512(url);

      if (config.method == "get") {
        config.params = { hash: hash, ...config.params };
      } else {
        config.data.append("hash", hash);
      }
    } catch (err) {
      console.log(err);
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstances;
