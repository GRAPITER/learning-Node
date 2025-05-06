const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Product {
    title: String!
    category: String!
    price: Float!
    inStock: Boolean!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product

    delete(id: ID!): Boolean

    updateProduct(
      id: ID!
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product
  }
`;

module.exports = typeDefs;
