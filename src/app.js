import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css";

import Sidebar from "./components/Sidebar.js";
import CenterHeader from "./components/CenterHeader.js";
import Router from "./router/Router.js";
// import Breadcrumb from "./breadcrumb/Breadcrumb.js";

const BASE_ENDPOINT = process.env.REACT_APP_BASEURL;
console.log("Baseurl: ", BASE_ENDPOINT)

const API_ENDPOINT = "/v1.2beta/dcsc/api/";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Dashboard",
      headerText: "DASHBOARD",
      subHeaderText: "GLOBAL",
      subHeaderOpts: [],
      authToken: "",
      endPoint: API_ENDPOINT,
      previousPageDetails: {
        previousPage: "",
        headerText: "",
      },
    };
  }

  componentDidMount() {
    let authToken = this.getToken("ec-config");
    this.setState({
      authToken: authToken,
    });
  }

  componentDidUpdate(prevprops, prevstate) {
    if(prevstate.headerText != this.state.headerText){
      /* this.setState({        
        currentPage: this.state.previousPageDetails.previousPage,
        headerText: this.state.previousPageDetails.headerText,
      }); */
    }
  }

  switchPage(changePageTo) {
    this.setState({
      previousPageDetails: {
        previousPage: this.state.currentPage,
        headerText: this.state.headerText,
      },
      currentPage: changePageTo.pageName,
      headerText: changePageTo.headerText,
    });
  }

  changePersona(value) {
    this.setState({
      subHeaderText: value.personaName,
    });
  }

  setPersonaOptions(options) {
    this.setState({
      subHeaderOpts: options,
    });
  }

  getToken(name) {
    var cookieName = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
  }

  render() {
    return (
      <BrowserRouter basename={BASE_ENDPOINT}>
        <Fragment>
          <div className="MainDiv">
            <div className="row m-0">
              <Sidebar clickEvent={this.switchPage.bind(this)} />

              <div className="col-9 p-0 page-content-wrapper">
                <CenterHeader
                  headerText={this.state.headerText}
                  subText={this.state.subHeaderText}
                  subHeaderOpts={this.state.subHeaderOpts}
                  onPersonaChange={this.changePersona.bind(this)}
                  clickEvent={this.switchPage.bind(this, {
                    pageName: this.state.previousPageDetails.previousPage,
                    headerText: this.state.previousPageDetails.headerText,
                  })}
                />

                <div className="container-fluid center-container d-grid mb-2">
                  {/* <Breadcrumb /> */}
                  <Router
                    clickEvent={this.switchPage.bind(this)}
                    persona={this.state.subHeaderText}
                    setPersonaHandler={this.setPersonaOptions.bind(this)}
                    baseUrl={this.state.endPoint}
                    authToken={this.state.authToken}
                  />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}
