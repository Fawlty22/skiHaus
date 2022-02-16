const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
// import middleware for verifying token sent with server requests
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3003;
const app = express();

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: authMiddleware 
});
const startServer = async () => {
  // Start the Apollo server
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });
}

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// log where we can go to test our GQL API
console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});