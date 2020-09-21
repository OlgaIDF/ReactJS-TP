import React from "react";

const NavBar = ({ totalDepences }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light ">
      <span className="alert alert-secondary" role="alert">
      { totalDepences }
      </span>
      
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
