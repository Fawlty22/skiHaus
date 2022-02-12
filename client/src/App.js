import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; // v5
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { StoreProvider } from "./utils/GlobalContext";
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <header>
            <h1>Library App</h1>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </header>
        </div>
        <StoreProvider>
          <Switch>
            <Route exact path="/dashboard" render={() => <Dashboard />} />
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/customerform" render={() => <CustomerForm />} />
          </Switch>
        </StoreProvider>
      </Router>
    </ApolloProvider >
  );
}

export default App;
