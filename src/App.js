import { Route, Switch, Redirect } from "react-router-dom";
import Game from "./component/Game/Game";
import { useState, useEffect } from "react";
import Layout from "./component/layout/Layout";
import Login from "./component/Login/Login";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
