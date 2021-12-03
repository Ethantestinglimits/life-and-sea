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
  })

}

export default axiosInstances;
