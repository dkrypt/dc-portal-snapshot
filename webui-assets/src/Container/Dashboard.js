import React, { Fragment } from "react";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(".carousel").flickity({
      cellAlign: "left",
      contain: true,
      freeScroll: true,
      prevNextButtons: false,
      groupCells: 3,
      autoPlay: 3000,
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container-lg w-100 p-3 borderStyle mb-4">
          <div className="text-center titles mb-3">MY SERVICES</div>
          <div className="carousel">
            <div className="carousel-cell borderStyle p-2">
              <a
                className="service-text"
                href="#"
                onClick={this.props.clickEvent.bind(this, {
                  pageName: "ThreadConnect",
                  headerText: "MY THREAD CONNECT SERVICE",
                  subHeaderText: "GLOBAL",
                })}
              >
                <div className="row mb-2">
                  <div className="col titles service-tile-content">
                    THREAD CONNECT
                  </div>
                  <div className="col-3 text-center service-tile-content">
                    <img
                      className="img-fluid"
                      src="assets/src/images/Icon-TC.svg"
                      alt="TC-Icon"
                    ></img>
                  </div>
                </div>
              </a>
              <div className="row service-details">
                <div className="col service-tile-content">
                  Connector Count: 8
                </div>
                <div className="col service-tile-content">
                  Connector Status:<span className="redDot"></span>
                </div>
                <div className="col service-tile-content">
                  Subscription Count: 4
                </div>
                <div className="col service-tile-content">
                  Subscription Status:<span className="greenDot"></span>
                </div>
              </div>
            </div>
            <div className="carousel-cell borderStyle p-2">
              <a
                className="service-text"
                href="#"
                onClick={this.props.clickEvent.bind(this, {
                  pageName: "EnterpriseConnect",
                  headerText: "MY ENTERPRISE CONNECT SERVICE",
                  subHeaderText: "GLOBAL",
                })}
              >
                <div className="row mb-2">
                  <div className="col titles service-tile-content">
                    ENTERPRISE CONNECT
                  </div>
                  <div className="col-3 text-center service-tile-content">
                    <img
                      className="img-fluid"
                      src="assets/src/images/Icon-EC.svg"
                      alt="EC-Icon"
                      style={{ width: "75%" }}
                    ></img>
                  </div>
                </div>
              </a>
              <div className="row service-details">
                <div className="col service-tile-content">
                  Connector Count: 8
                </div>
                <div className="col service-tile-content">
                  Connector Status:<span className="yellowDot"></span>
                </div>
                <div className="col service-tile-content">Gateway Count: 2</div>
                <div className="col service-tile-content">
                  Gateway Status:<span className="redDot"></span>
                </div>
              </div>
            </div>
            <div className="carousel-cell borderStyle p-2">
              <a
                className="service-text"
                href="#"
                onClick={this.props.clickEvent.bind(this, {
                  pageName: "Dive",
                  headerText: "MY DIVE SERVICE",
                  subHeaderText: "GLOBAL-DIVE",
                })}
              >
                <div className="row mb-2">
                  <div className="col titles service-tile-content">DIVE</div>
                  <div className="col-3 text-center service-tile-content">
                    <img
                      className="img-fluid"
                      src="assets/src/images/Icon-Dive.svg"
                      alt="Dive-Icon"
                    ></img>
                  </div>
                </div>
              </a>
              <div className="row service-details">
                <div className="col service-tile-content">
                  Dashboard Count: 8
                </div>
                <div className="col service-tile-content">
                  Dashboard Status:<span className="greenDot"></span>
                </div>
                <div className="col service-tile-content">
                  Subscription Count: 4
                </div>
                <div className="col service-tile-content">
                  Subscription Status:<span className="yellowDot"></span>
                </div>
              </div>
            </div>
            <div className="carousel-cell borderStyle p-2">
              <a
                className="service-text"
                href="#"
                onClick={this.props.clickEvent.bind(this, {
                  pageName: "Globalscape",
                  headerText: "MY GLOBALSCAPE SERVICE",
                  subHeaderText: "GLOBAL-GLOBALSCAPE",
                })}
              >
                <div className="row mb-2">
                  <div className="col titles service-tile-content">
                    GLOBALSCAPE
                  </div>
                  <div className="col-3 text-center service-tile-content">
                    <img
                      className="img-fluid"
                      src="assets/src/images/Icon-Globalscape.svg"
                      alt=""
                      style={{ width: "75%" }}
                    ></img>
                  </div>
                </div>
              </a>
              <div className="row service-details">
                <div className="col service-tile-content">
                  Dashboard Count: 8
                </div>
                <div className="col service-tile-content">
                  Dashboard Status:<span className="yellowDot"></span>
                </div>
                <div className="col service-tile-content">
                  Subscription Count: 4
                </div>
                <div className="col service-tile-content">
                  Subscription Status:<span className="greenDot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg w-100 p-3 borderStyle">
          <div className="text-center mb-2">
            <div className="titles">PLANNED OUTAGES</div>
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
            <div className="border-bottom border-grey border-1 mx-1"></div>
          </div>
          <div className="text-center mb-2">
            <div className="titles">IMPORTANT ANNOUNCEMENTS</div>
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
