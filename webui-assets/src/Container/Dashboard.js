import React, { Fragment } from "react";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="container-lg w-100 p-3 borderStyle mb-4">
          <div className="text-center my-2 green-color subs-text">
            <h5>
              <b>My Services</b>
            </h5>
          </div>
          <div className="row mx-1">
            <div className="col m-1 borderStyle p-2 text-left">
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
                    <div className="row">
                      <div className="col">Thread Connect</div>
                      <div className="col-3">
                        <img
                          className="img-fluid"
                          src="assets/src/images/Icon-TC.svg"
                          alt="TC-Icon"
                        ></img>
                      </div>
                    </div>
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
            <div className="col m-1 borderStyle p-2 text-left">
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
                    <div className="row">
                      <div className="col">Enterprise Connect</div>
                      <div className="col-3">
                        <img
                          className="img-fluid"
                          src="assets/src/images/Icon-EC.svg"
                          alt="EC-Icon"
                        ></img>
                      </div>
                    </div>
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
            <div className="col m-1 borderStyle p-2 text-left">
              <h6>
                <b>
                  <a
                    className="service-text"
                    href="#"
                    onClick={this.props.clickEvent.bind(this, {
                      pageName: "Dive",
                      headerText: "My Dive Service",
                      subHeaderText: "Global-Dive",
                    })}
                  >
                    <div className="row">
                      <div className="col">Dive</div>
                      <div className="col-3">
                        <img
                          className="img-fluid"
                          src="assets/src/images/Icon-Dive.svg"
                          alt="Dive-Icon"
                        ></img>
                      </div>
                    </div>
                  </a>
                </b>
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
        <div className="container-lg w-100 p-3 borderStyle">
          <div className="text-center my-2 green-color subs-text">
            <h5>
              <b>Planned Outages</b>
            </h5>
            <div className="d-flex flex-column service-details">
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
            <div className="d-flex flex-column service-details">
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
