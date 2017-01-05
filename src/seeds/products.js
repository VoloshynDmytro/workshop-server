import Product from '../../src/models/product.model';

let productsSeed = () => {
  return Product.remove({}).then(() => {
    var productsData = require('./data/products.json');
    return Product.collection.insertMany(productsData).then(res => {
      console.log('Products inserted.');
    })
  });
};

export default productsSeed;
