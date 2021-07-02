import React, { Fragment } from "react";

import Sidebar from "./Components/Sidebar.js";
import { CenterHeader } from "./Components/CenterHeader.js";
import Footer from "./Components/Footer.js";
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
      <Fragment>
        {/* <div className="container position-fixed">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="dashboard-header">
              {"Dashboard"}
              <span className="global-icon ml-1">
                {"Global"}
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
                    className="round"
                    placeholder="search"
                  />
                  <input type="submit" className="corner" value="" />
                </div>
              </form>
            </div>
          </nav>
        </div> */}
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
          {/* <footer>
            <Footer />
          </footer> */}
        </div>
      </Fragment>
    );
  }
}
