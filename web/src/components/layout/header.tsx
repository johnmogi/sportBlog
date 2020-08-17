import React from "react";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/games" exact>
              games
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
