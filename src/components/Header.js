import{LOGO_URL} from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnname, setBtnname] = useState("Login");
  // if there is no depency array, the function will run every time the component renders
  // if there is an empty array, the function will run only once when the component renders
  // if there is a dependency array, the function will run when the component renders and when the dependency changes
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL} 
          />
        </div>
        <div className="nav-item-container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <li>
              <button className="btn" onClick={() => setBtnname(btnname === "Login" ? "Logout" : "Login")}>{btnname}</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;