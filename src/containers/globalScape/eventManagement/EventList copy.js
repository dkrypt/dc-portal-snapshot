import React, { Fragment } from "react";
import ViewSchedule from "./ViewSchedule.js";
import {AssignEventToSso} from "./AssignEventToSso.js";
import {Enable} from "./Enable.js";
import {Disable} from "./Disable.js";
import {RunNow} from "./RunNow.js";
import ToastMessage from "../ToastMessage.js";
import AxiosInstance from "../api/api.js";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showSso: false,
      showEnable: false,
      showDisable: false,
      showRunNow: false,
      showToastM: false,
      selectedEventName: "",
      toastMessage: "",
      eventsData: [],
      loading: true
    };
    this.closeModal = this.closeModal.bind(this);
    this.updatedToastMessage = this.updatedToastMessage.bind(this);
  }

  componentDidMount() {
    axios
      .post("/02/SelfServicePortal/DISP_DISPLAY_EVENT_LIST?UserID=502663088")

      .then((response) => {
        // Handle response after CORS resolution
        this.setState({ eventsData: response.data, loading: false });
        console.log("Event data :", this.state.eventsData);
      })
      .catch((e) => {
        console.error(e);
      });
  }
  updatedToastMessage(value, msg) {
    this.setState({ showToastM: value, toastMessage: msg });
  }

  viewScheduleFun(eventname) {
    this.setState({
      showModal: true,
      selectedEventName: eventname,
    });
  }

  closeModal() {
    console.log("in close modal", this);
    this.setState({
      showModal: false,
      showSso: false,
      showEnable: false,
      showDisable: false,
      showRunNow: false,
    });
  }
  assignSsoFun(eventname) {
    this.setState({
      showSso: true,
      selectedEventName: eventname,
    });
  }
  showEnableFun(eventname) {
    this.setState({
      showEnable: true,
      selectedEventName: eventname,
    });
  }
  showDisableFun(eventname) {
    this.setState({
      showDisable: true,
      selectedEventName: eventname,
    });
  }
  showRunNowFun(eventname) {
    this.setState({
      showRunNow: true,
      selectedEventName: eventname,
    });
  }

  render() {
    return (
      <div className="container-lg w-100 p-3 borderStyle mb-5 gs-container">
        {this.state.loading ? (
          <Spinner className="gs-loader" animation="border" />
        ) : (
          <Fragment>
            <div className="gs_event-header">
              {/* <div className="text-left titles mb-3">Event Name ( 100+ Character long )</div> */}
              <div className="search">
                <input
                  type="text"
                  name="search"
                  className="round borderStyle"
                  placeholder="search"
                />
                <input type="submit" className="corner" value="" />
              </div>
            </div>

            <table id="gs_event-table" className="table">
              <tbody>
                {this.state.eventsData.map(({ EVENT_NAME }, index) => {
                  return (
                    <tr key={index}>
                      <td><input type="checkbox" id="globalCheckCox" name="gsCheck" value="" /></td>
                      <td className="gs_event-col">{EVENT_NAME}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => this.showRunNowFun(EVENT_NAME)}
                        >
                          Run Now
                        </button>{" "}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => this.showEnableFun(EVENT_NAME)}
                        >
                          Enable
                        </button>{" "}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => this.showDisableFun(EVENT_NAME)}
                        >
                          Disable
                        </button>{" "}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => this.viewScheduleFun(EVENT_NAME)}
                        >
                          Modify Schedule
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => this.assignSsoFun(EVENT_NAME)}
                        >
                          Assign Group
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {this.state.showModal && (
              <ViewSchedule
                openModal={this.state.showModal}
                closeModal={this.closeModal}
                eventName={this.state.selectedEventName}
                toastMessage={this.updatedToastMessage}
              />
            )}
            {this.state.showSso && (
              <AssignEventToSso
                openModal={this.state.showSso}
                closeModal={this.closeModal}
                eventName={this.state.selectedEventName}
                toastMessage={this.updatedToastMessage}
              />
            )}

            {this.state.showEnable && (
              <Enable
                openModal={this.state.showEnable}
                closeModal={this.closeModal}
                eventName={this.state.selectedEventName}
                toastMessage={this.updatedToastMessage}
              />
            )}
            {this.state.showDisable && (
              <Disable
                openModal={this.state.showDisable}
                closeModal={this.closeModal}
                eventName={this.state.selectedEventName}
                toastMessage={this.updatedToastMessage}
              />
            )}

            {this.state.showRunNow && (
              <RunNow
                openModal={this.state.showRunNow}
                closeModal={this.closeModal}
                eventName={this.state.selectedEventName}
                toastMessage={this.updatedToastMessage}
              />
            )}

            {this.state.toastMessage &&
              <ToastMessage
                showToast={this.state.showToastM}
                updateToast={this.updatedToastMessage}
                toastMessage={this.state.toastMessage}
              />
            }
          </Fragment>
        )}
      </div>
    );
  }
}
