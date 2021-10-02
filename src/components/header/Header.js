import React from "react";
import Navigation from "../navigation/Navigation.js";
import Search from "../search/Search.js";
import logo from "./../../images/logo.png";
const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img width="250px" src={logo} alt="" />
      </div>
      <Navigation></Navigation>
      <div style={{ background: "grey" }}>
        <Search></Search>
      </div>
    </div>
  );
};

export default Header;
