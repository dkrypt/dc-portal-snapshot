import React from "react";

import Sidebar from "./Components/Sidebar.js";
import { CenterHeader } from "./Components/CenterHeader.js";
import Dashboard from "./Container/Dashboard.js";
import ThreadConnect from "./Container/ThreadConnect.js";
import EnterpriseConnect from "./Container/EnterpriseConnect.js";
import Dive from "./Container/Dive.js";
import DivePower from "./Container/DivePower.js";

export default class App extends React.Component {
  /**
  componentDidMount(){

    // Sidebar Toggle Menu Click
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
     });
  } */

  constructor(props) {
    super(props);
    this.state = {
      currentPage: "",
      headerText: "",
      subHeaderText: "",
    };
  }

  componentDidMount() {
    this.setState({
      currentPage: "Dashboard",
      headerText: "Dashboard",
      subHeaderText: "Global",
    });
  }

  switchPage(changePageTo) {
    this.setState({
      currentPage: changePageTo.pageName,
      headerText: changePageTo.headerText,
      subHeaderText: changePageTo.subHeaderText,
    });
  }

  servedView() {
    const currentPage = this.state.currentPage;

    switch (currentPage) {
      case "Dashboard":
        return <Dashboard clickEvent={this.switchPage.bind(this)} />;
      case "ThreadConnect":
        return <ThreadConnect clickEvent={this.switchPage.bind(this)} />;
      case "Dive":
        return <Dive clickEvent={this.switchPage.bind(this)} />;
      case "DivePower":
        return <DivePower clickEvent={this.switchPage.bind(this)} />;
      case "EnterpriseConnect":
        return <EnterpriseConnect clickEvent={this.switchPage.bind(this)} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="MainDiv">
        <div className="d-flex" id="wrapper">
          <Sidebar clickEvent={this.switchPage.bind(this)} />

          <div id="page-content-wrapper">
            <CenterHeader
              headerText={this.state.headerText}
              subText={this.state.subHeaderText}
            />

            <div className="container-fluid d-grid mb-2">
              {this.servedView()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
