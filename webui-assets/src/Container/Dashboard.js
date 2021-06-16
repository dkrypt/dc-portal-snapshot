import React, { Fragment } from "react";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="container-lg w-100 p-3 border border-success mb-4">
          <div className="text-center my-2 green-color subs-text">
            <h5>
              <b>My Services</b>
            </h5>
          </div>
          <div className="row mx-1" style={{ color: "#1f78b4" }}>
            <div className="col m-1 border border-success p-2 text-left">
              <h6>
                <b>
                  <a
                    className="service-text"
                    href="#"
                    onClick={this.props.clickEvent.bind(this, {
                      pageName: "ThreadConnect",
                      headerText: "My Thread Connect Service",
                      subHeaderText: "Global",
                    })}
                  >
                    Thread Connect
                  </a>
                </b>
              </h6>

              <span className="thread-span"></span>
              <div className="row service-details">
                <div className="col">Connector Count: 8</div>
                <div className="col">
                  Connector Status:{" "}
                  <span className="badge badge-success"></span>
                </div>
                <div className="col">Subscription Count: 4</div>
                <div className="col">Subscription Status:</div>
              </div>
            </div>
            <div className="col m-1 border border-success p-2 text-left">
              <h6>
                <b>
                  <a
                    className="service-text"
                    href="#"
                    onClick={this.props.clickEvent.bind(this, {
                      pageName: "EnterpriseConnect",
                      headerText: "My Enterprise Connect Service",
                      subHeaderText: "Global",
                    })}
                  >
                    Enterprise Connect
                  </a>
                </b>
              </h6>
              <span className="thread-span"></span>
              <div className="row service-details">
                <div className="col">Connector Count: 8</div>
                <div className="col">
                  Connector Status:{" "}
                  <span className="badge badge-success"></span>
                </div>
                <div className="col">Gateway Count: 2</div>
                <div className="col">Gateway Status:</div>
              </div>
            </div>
            <div className="col m-1 border border-success p-2 text-left">
              <h6>
                <b>Dive</b>
              </h6>
              <span className="thread-span"></span>
              <div className="row service-details">
                <div className="col">Dashboard Count: 8</div>
                <div className="col">
                  Dashboard Status:{" "}
                  <span className="badge badge-success"></span>
                </div>
                <div className="col">Subscription Count: 4</div>
                <div className="col">Subscription Status:</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg w-100 p-3 border border-success">
          <div className="text-center my-2 green-color subs-text">
            <h5>
              <b>Planned Outages</b>
            </h5>
            <div
              className="d-flex flex-column inside-box"
              style={{ color: "#1f78b4", fontSize: "12px" }}
            >
              <div className="text-center para-text my-2">
                March 22, 2021 (04:00 To 05:00 EST) Thread Connect Corporate
                Production will undergo monthly patching activity
              </div>
              <div className="text-center para-text my-2">
                April 8, 2021 (02:00 To 04:00 EST) Enterprise Connect Gateways
                will not be reachable due to planned maintenance activity
              </div>
            </div>
            <div className="border-bottom border-dark border-1 mx-4"></div>
          </div>
          <div className="text-center my-2 green-color subs-text">
            <h5>
              <b>Important Announcements</b>
            </h5>
            <div
              className="d-flex flex-column inside-box"
              style={{ color: "#1f78b4", fontSize: "12px" }}
            >
              <div className="text-center para-text my-2">
                GE Healthcare Unveils Vscan Air, a New Intuitive, Wireless
                Handheld Ultrasound
              </div>
              <div className="text-center para-text my-2">
                GE Renewable Energy to supply DC-Coupled system to Convergent
                forx 123 MWh hybrid solar plus storage project in Upstatek
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
