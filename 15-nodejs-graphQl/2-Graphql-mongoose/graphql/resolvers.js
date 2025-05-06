const product = require("../modal/modal");

const resolvers = {
  Query: {
    products: async () => await product.find({}),
    product: async (_, { id }) => await product.findById(id),
  },
  Mutation: {
    createProduct: async (_, args) => {
      console.log(args);
      const addProduct = await product.create(args);

      return addProduct;
    },
    delete: async (_, { id }) => {
      await product.findByIdAndDelete(id);
      return !!deletedProduct;
    },
  },
};

module.exports = resolvers;
