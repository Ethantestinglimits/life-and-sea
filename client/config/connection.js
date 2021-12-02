const apiURL = {
  development: "https://lifeandsea-api.barthofu.com",
  production: "",
};

export default apiURL[process.env.NODE_ENV];
