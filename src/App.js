import { Route, Switch, Redirect } from "react-router-dom";
import Game from "./component/Game/Game";

import Layout from "./component/layout/Layout";
import Login from "./component/login/Login";

function App() {
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
}

export default App;
