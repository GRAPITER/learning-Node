const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const resolvers = require("../graphql/resolvers");
const typeDefs = require("../graphql/schema");

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log("====================================");
  console.log(`server ready at ${url}`);
  console.log("====================================");
}

startServer();
