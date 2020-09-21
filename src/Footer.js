import React from "react";

const Footer = ({ copyright }) => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <h6 className="text-center mb-5">{copyright}</h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
