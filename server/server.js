const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
// import middleware for verifying token sent with server requests
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const path = require('path');

const PORT = process.env.PORT || 3001;
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


// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// log where we can go to test our GQL API
console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});