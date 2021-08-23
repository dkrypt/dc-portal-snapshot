import React, { Fragment } from "react";
import { Breadcrumb } from "react-bootstrap";

import Icon_Back_Button from "../assets/images/Icon-Back-Button.png"

export default class CenterHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("Persona Options: ", this.props.subHeaderOpts);
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="headers row">
          <div className="col pr-0">
            {this.props.headerText}

            <span className="global-icon ml-1">
              <a
                className="dropdown-toggle"
                href="#"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {this.props.subText}
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={this.props.onPersonaChange.bind(this, {
                    personaName: "GLOBAL",
                  })}
                >
                  GLOBAL
                </a>

                {this.props.subHeaderOpts.map((option, index) => {
                  {
                    /* console.log("Option: ", option); */
                  }
                  return (
                    <Fragment key={index}>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={this.props.onPersonaChange.bind(this, {
                          personaName: option,
                        })}
                      >
                        {option}
                      </a>
                    </Fragment>
                  );
                })}

                {/* <a
                  className="dropdown-item"
                  href="#"
                  onClick={this.props.onPersonaChange.bind(this, {
                    personaName: "Persona 2",
                  })}
                >
                  Persona 2
                </a> */}
              </div>
            </span>
          </div>          
          {/* <div className="navigator">
          {this.props.headerText == "DASHBOARD"? "" : <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#" onClick={this.props.clickEvent}                
                >
                <img
                  className="img-fluid"
                  alt=""
                  src={Icon_Back_Button}
                />
                back
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>}
            
          </div> */}
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
  }
}
