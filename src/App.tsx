import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { UserDetailsContainer } from "./components/UserDetails";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/user/:id" component={UserDetailsContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
