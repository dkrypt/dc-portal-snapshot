import React, { Fragment } from "react";
// import { Breadcrumb } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "./app.css";

import Sidebar from "./components/Sidebar.js";
import CenterHeader from "./components/CenterHeader.js";
import Router from "./router/Router.js";
import Breadcrumb from "./breadcrumb/Breadcrumb.js";

const API_ENDPOINT = "/v1.2beta/dcsc/api/";

export default class App extends React.Component {
  /*  componentDidMount(){

    // Sidebar Toggle Menu Click
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
     });


  }
 */
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

  componentDidUpdate(prevprops, prevstate) {}

  switchPage(changePageTo) {
    this.setState({
      previousPageDetails: {
        previousPage: this.state.currentPage,
        headerText: this.state.headerText,
      },
      currentPage: changePageTo.pageName,
      headerText: changePageTo.headerText,
      // subHeaderText: changePageTo.subHeaderText,
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

    // console.log("List of headeropts: ", options);
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

  /* servedView() {
    const currentPage = this.state.currentPage;
    switch (currentPage) {
      case "Dashboard":
        return (
          <Dashboard
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "ThreadConnect":
        return (
          <ThreadConnect
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "TCDashboard":
        return (
          <TCDashboard
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "Dive":
        return (
          <Dive
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "DivePower":
        return (
          <DivePower
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "EnterpriseConnect":
        return (
          <EnterpriseConnect
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "NewEngagementRequest":
        return (
          <NewEngagementRequest
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
            baseUrl={this.state.endPoint}
            authToken={this.state.authToken}
          />
        );
      case "Globalscape":
        return (
          <GlobalScape
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "Manage":
        return (
          <Manage
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "ManageTC":
        return (
          <ManageTC
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "Subscription":
        return (
          <ManageSubscription
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      case "User":
        return (
          <ManageUser
            clickEvent={this.switchPage.bind(this)}
            persona={this.state.subHeaderText}
            setPersonaHandler={this.setPersonaOptions.bind(this)}
          />
        );
      default:
        return null;
    }
  } */

  render() {
    return (
      <BrowserRouter>
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
                  {/* {this.servedView()} */}
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
