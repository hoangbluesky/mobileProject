const express = require('express');
const app = express();
const port = 2000;

const productData = require('./products.json');

app.get('/api/products', (req, res) => {
  const productName = req.query.name;

  if (productName) {
    const filteredProduct = productData.product.find(product => product.name === productName);

    if (filteredProduct) {
      res.json(filteredProduct);
    } else {
      res.status(404).json({ message: 'Sản phẩm không được tìm thấy' });
    }
  } else {
    res.json(productData);
  }
});

app.use(express.static('assets'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
