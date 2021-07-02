import React from "react";

export const CenterHeader = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="dashboard-header">
        {props.headerText}
        <span className="global-icon ml-1">
          {props.subText}
          <img alt="" src="assets/src/images/Logo-Dropdown-Circle.svg" />
        </span>
      </div>
      <div className="col-sm"></div>
      <div className="search-bar">
        <form id="search-form">
          <div className="search">
            <input
              type="text"
              name="search"
              className="round borderStyle"
              placeholder="search"
            />
            <input type="submit" className="corner" value="" />
          </div>
        </form>
      </div>
    </nav>
  );
};
