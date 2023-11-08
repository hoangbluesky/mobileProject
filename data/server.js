const express = require('express');
const app = express();
const port = 2000;

const productData = require('./products.json');

app.get('/api/products', (req, res) => {
  // Trả về dữ liệu sản phẩm dưới dạng JSON
  res.json(productData);
});

app.use(express.static('assets'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
