require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const connectToDb = require("../database/data");
const typeDefs = require("../graphql/schema");
const resolvers = require("../graphql/resolvers");

async function startServer() {
  await connectToDb();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`connected to the server ${url}`);
}

startServer();
