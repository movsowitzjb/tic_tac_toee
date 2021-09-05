import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tic Tac Toe</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName={classes.active}>
              DashBoard
            </NavLink>
          </li>
          <li>
            <NavLink to="/game" activeClassName={classes.active}>
              Game
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName={classes.active}>
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
