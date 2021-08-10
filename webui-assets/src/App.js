import React, { Fragment } from "react";

import Sidebar from "./Components/Sidebar.js";
import CenterHeader from "./Components/CenterHeader.js";
import Footer from "./Components/Footer.js";
import Dashboard from "./Container/Dashboard.js";
import ThreadConnect from "./Container/ThreadConnect.js";
import EnterpriseConnect from "./Container/EnterpriseConnect.js";
import Dive from "./Container/Dive.js";
import DivePower from "./Container/DivePower.js";
import NewEngagementRequest from "./Container/NewEngagementRequest.js";

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
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevprops, prevstate) {}

  switchPage(changePageTo) {
    this.setState({
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

  servedView() {
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
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
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
              />

              <div className="container-fluid center-container d-grid mb-2">
                {this.servedView()}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
