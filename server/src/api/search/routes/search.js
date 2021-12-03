module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/search',
     handler: 'search.searchAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
