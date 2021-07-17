import React from "react";

export const CenterHeader = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="headers row">
        <div className="col pr-0">
          {props.headerText}

          <span className="global-icon ml-1">
            <a
              className="dropdown-toggle"
              href="#"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.subText}
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">
                Global
              </a>
              <a className="dropdown-item" href="#">
                Option 2
              </a>
              <a className="dropdown-item" href="#">
                Option 3
              </a>
            </div>
          </span>
        </div>
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
