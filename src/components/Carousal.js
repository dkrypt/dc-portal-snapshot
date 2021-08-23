import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Carousel, Dropdown } from "react-bootstrap";

import Icon_Open from "../assets/images/Icon-Open.svg";

export default class CarouselItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment().format("DD-MM-YYYY"),
      month: moment().format("MMMM"),
    };
  }

  componentDidMount() {}

  handleExternalLink(url) {
    window.open(url, "_blank");
  }

  render() {
    return (
      <Carousel interval={3000}>
        {console.log("Carousel called")}
        {this.props.serviceCardDisplay.map((serviceCard, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="row">
                {serviceCard.map((service, index) => {
                  return (
                    <div className="col-sm-4" key={index}>
                      <div className="thumb-wrapper borderStyle p-1">
                        <Link
                          className="service-text"
                          to={
                            service.from +
                            "/" +
                            service.onClick.pageName.toLowerCase()
                          }
                          onClick={this.props.clickEvent.bind(this, {
                            pageName: service.onClick.pageName,
                            headerText: service.onClick.headerText,
                            // subHeaderText: this.props.persona,
                          })}
                        >
                          <div className="row mb-2">
                            <div className="col ml-1 titles service-tile-content">
                              {service.serviceName}
                            </div>
                            <div className="col-3 text-center service-tile-content">
                              <img
                                className="img-fluid"
                                src={service.img.src}
                                alt={service.img.alt}
                                style={
                                  typeof service.img.style == "object"
                                    ? service.img.style
                                    : {}
                                }
                              />
                            </div>
                          </div>
                        </Link>
                        {/* <a
                          className="service-text"
                          href="#"
                          onClick={this.props.clickEvent.bind(this, {
                            pageName: service.onClick.pageName,
                            headerText: service.onClick.headerText,
                            // subHeaderText: this.props.persona,
                          })}
                        >
                          <div className="row mb-2">
                            <div className="col ml-1 titles service-tile-content">
                              {service.serviceName}
                            </div>
                            <div className="col-3 text-center service-tile-content">
                              <img
                                className="img-fluid"
                                src={service.img.src}
                                alt={service.img.alt}
                                style={
                                  typeof service.img.style == "object"
                                    ? service.img.style
                                    : {}
                                }
                              />
                            </div>
                          </div>
                        </a> */}
                        <div className="row service-details">
                          {Object.entries(service.serviceInfo).map(
                            ([key, value], index) => {
                              return (
                                <div
                                  className="col m-1 service-tile-content"
                                  key={index}
                                >
                                  {key
                                    .replace("$date", this.state.date)
                                    .replace("$month", this.state.month)}
                                  :{" "}
                                  {value == "Healthy $status"
                                    ? "Healthy "
                                    : value == "Restarting $status"
                                    ? "Restarting "
                                    : value}{" "}
                                  {value == "Healthy $status" ? (
                                    <span className="greenDot"></span>
                                  ) : value == "Restarting $status" ? (
                                    <span className="yellowDot"></span>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              );
                            }
                          )}
                        </div>
                        {service.buttons.displayButtons ? (
                          <div className="row carousel-buttons px-3 py-1">
                            {/* {console.log("buttons: ", service.buttons)} */}
                            {service.buttons.buttonInfo.map(
                              (buttonData, index) => {
                                return buttonData.buttonName == "dots" ? (
                                  <Dropdown key={index}>
                                    <Dropdown.Toggle
                                      id="dropdown-basic"
                                      drop="down"
                                      variant="secondary btn-sm"
                                    >
                                      . . .
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item
                                        target="_blank"
                                        href="https://graylog-prod-aws.digitalconnect.apps.ge.com/streams"
                                      >
                                        Graylog
                                      </Dropdown.Item>
                                      <Dropdown.Divider />
                                      <Dropdown.Item
                                        target="_blank"
                                        href="https://grafana-preprod-aws.digitalconnect.apps.ge.com/login"
                                      >
                                        Grafana
                                      </Dropdown.Item>
                                      <Dropdown.Divider />
                                      <Dropdown.Item href="#">
                                        Integration Version Details
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                ) : (
                                  <button
                                    key={index}
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    onClick={
                                      buttonData.type == "internal"
                                        ? buttonData.onClick != ""
                                          ? "#"
                                          : "#"
                                        : buttonData.type == "popup"
                                        ? buttonData.onClick.showPopUpModal.bind(
                                            this,
                                            {
                                              show: true,
                                              buttonName: buttonData.buttonName,
                                            }
                                          )
                                        : buttonData.type == "external"
                                        ? this.handleExternalLink.bind(
                                            buttonData.onClick.url
                                          )
                                        : ""
                                    }
                                  >
                                    {buttonData.buttonName == "Open" ? (
                                      <img
                                        className="img-fluid"
                                        src={Icon_Open}
                                        alt="Open-Icon"
                                        style={{ width: "25%" }}
                                      />
                                    ) : (
                                      ""
                                    )}
                                    {buttonData.type == "internal" ? (
                                      <Link
                                        className=""
                                        to={buttonData.path}
                                        onClick={this.props.clickEvent.bind(
                                          this,
                                          {
                                            pageName:
                                              buttonData.onClick.pageName,
                                            headerText: service.serviceName,
                                            // subHeaderText: this.props.persona,
                                          }
                                        )}
                                      >
                                        {buttonData.buttonName}
                                      </Link>
                                    ) : (
                                      buttonData.buttonName
                                    )}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
