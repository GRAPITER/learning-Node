const { gql } = require("graphql-tag");

// createProducts(
//     title: String!
//     category: String!
//     price: Float!
//     inStock: Boolean!
//   ): Product
//in this schema  type mean create product take this title etc and response or return in product is there is Boolean istead of product so it mean it takes all tilts property and retun true or flase

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    inStock: Boolean!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
    productsOppo(id: ID!): [Product!]!
  }

  type Mutation {
    createProducts(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product

    deleteProduct(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
