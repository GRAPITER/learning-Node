const products = require("../data/products");

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((item) => item.id === id),
    productsOppo: (_, { id }) => products.filter((item) => item.id !== id),
  },

  Mutation: {
    createProducts: (_, { title, category, price, inStock }) => {
      const newProduct = {
        id: String(products.length + 1),
        title,
        category,
        price,
        inStock,
      };
      products.push(newProduct);
      return newProduct;
    },

    deleteProduct: (_, { id }) => {
      const is = products.findIndex((item) => item.id === id);
      if (is === -1) {
        return false;
      } else {
        products.splice(is, 1);
      }

      return true;
    },
  },
};

module.exports = resolvers;
