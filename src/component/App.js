import { Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Game from "./Game/Game";

import Layout from "./layout/Layout";
import Login from "./Login/Login";
import Signup from "./signup/Signup";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/signup" />
          </Route>
          <Route path="/signup" exact>
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Signup />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </Layout>
    </AuthProvider>
  );
};

export default App;
