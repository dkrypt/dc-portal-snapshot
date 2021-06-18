import React from "react";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading p-2">
          <div className="d-flex flex-row">
            <span className="mt-4 ml-1">
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Logo-GE1.svg"
              />
            </span>
            <div className="portal-name p-2 mt-2 ml-2">
              <div
                className="my-1 text-sm-left border-bottom"
                style={{ fontSize: "1.8vw" }}
              >
                <b>Digital Connect</b>
              </div>
              <div className="text-center mt-1" style={{ fontSize: "0.8vw" }}>
                <b>User | GE Corporate</b>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group list-group-flush pt-4 px-2 pb-2 pl-4">
          <span className="sidebarMenu">
            <img alt="" src="assets/src/images/Icon-Products.svg" />
            <a
              target="_blank"
              href="https://dc-wordpress-ci.digitalconnect.apps.ge.com/"
              className="list-group-item list-group-item-action"
            >
              Products & Services
            </a>
            {/**onClick={this.props.clickEvent.bind(this, {pageName:'ProductsAndServices', headerText:'Products & Services', subHeaderText:''})} */}
          </span>
          <span className="sidebarMenu">
            <img alt="" src="assets/src/images/Icon-Dashboard.svg" />
            <a
              href="#"
              className="list-group-item list-group-item-action"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Dashboard",
                headerText: "Dashboard",
                subHeaderText: "Global",
              })}
            >
              Dashboard
            </a>
          </span>
          {/* <span className="sidebarMenu" >
                  <img alt="" src='assets/src/images/Icon-Subscriptions.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">SUBSCRIPTIONS</a>
                </span> */}
          <span className="sidebarMenu">
            <img alt="" src="assets/src/images/Icon-Announcements-Events.svg" />
            <a
              href="#"
              className="list-group-item list-group-item-action"
              onClick={this.props.clickEvent.bind(
                this,
                "AnnouncementsAndEvents"
              )}
            >
              Announcements & Events
            </a>
          </span>
          <span className="sidebarMenu">
            <img alt="" src="assets/src/images/Icon-Engagement-Requests.svg" />
            <a href="#" className="list-group-item list-group-item-action">
              Engagement Requests
            </a>
          </span>
          <span className="sidebarMenu">
            <img alt="" src="assets/src/images/Icon-Support.svg" />
            <a href="#" className="list-group-item list-group-item-action">
              Support
            </a>
          </span>
          <span className="sidebarMenu">
            <img alt="" src="assets/src/images/Icon-Settings.svg" />
            <a href="#" className="list-group-item list-group-item-action">
              Preferences
            </a>
          </span>
          <span className="sidebarMenu">
            <img alt="" src="assets/src/images/Icon-Administration.svg" />
            <a href="#" className="list-group-item list-group-item-action">
              Administration
            </a>
          </span>
        </div>
        <footer className="mt-4">
          <div className="social-media text-center page-footer">
            <div className="social-tag">Socialize with us</div>
            <img
              alt=""
              className="px-2"
              src="assets/src/images/Icon-Github.svg"
            />
            <img
              alt=""
              className="px-2"
              src="assets/src/images/Icon-Yammer.svg"
            />
            <img
              alt=""
              className="px-2"
              src="assets/src/images/Icon-Confluence.svg"
            />
          </div>
          <div className="footer-copyright text-center text-white">
            <small>© Digital Connect 2021 | Copyrights Reserved</small>
          </div>
        </footer>
      </div>
    );
  }
}
