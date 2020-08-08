const axios = require('axios');

const getCartItems = (req, res) => {
  axios
  .get('https://5f2d3fed8085690016923038.mockapi.io/api/products')
  .then(response => res.status(200).json({ success: true, data: response.data }))
  .catch(error => res.status(400).json({ success: false}));
};

module.exports = {
  getCartItems,
};
