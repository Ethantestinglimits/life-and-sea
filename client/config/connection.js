const apiURL = {
  development: "https://lifeandsea-api.barthofu.com/api",
  production: "",
};

export default apiURL[process.env.NODE_ENV];
