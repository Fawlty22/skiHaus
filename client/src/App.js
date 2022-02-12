import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // v5
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CustomerForm from "./pages/CustomerForm";
import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [user, setUser] = useState({ token: "", author: null });
  console.log(user);
  return (
    <Router>
      <div>
        <Header />
      </div>

      <Switch>
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard user={user} />}
        />
        <Route exact path="/login" render={() => <Login setUser={setUser} />} />
        <Route exact path="/customerform" render={() => <CustomerForm />} />
      </Switch>
    </Router>
  );
}

export default App;
