import { Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Game from "./Game/Game";
import Dashboard from "../component/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ForgotPassword from "./forgotpassword/ForgotPassword";
import Login from "./Login/Login";
import Signup from "./signup/Signup";
import UpdateProfile from "./dashboard/UpdateProfile";

const App = () => {
  return (
    <AuthProvider>
      <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <PrivateRoute path="/game" component={Game} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </AuthProvider>
  );
};

export default App;
