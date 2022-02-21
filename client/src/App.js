import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // v5
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import Login from "./pages/Login";
import CustomerForm from "./pages/CustomerForm";
import Header from "./components/Header";
import CreateContract from "./pages/CreateContract.jsx";
import AddEmployeeForm  from "./pages/AddEmployeeForm";
import { StoreProvider } from "./utils/GlobalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
          <Header />
        </div>
        <StoreProvider>
          <Switch>
            <Route exact path="/dashboard" render={() => <Dashboard />} />
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/new-employee" render={() => <AddEmployeeForm />} />
            <Route exact path="/customerform" render={() => <CustomerForm />} />
            <Route exact path="/contract" render={() => <CreateContract />} />
            <Route exact path="/equipment" render={() => <Equipment />} />
          </Switch>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
