import React, { Fragment } from "react";
import ViewSchedule from "./ViewSchedule.js";
import ToastMessage from "../ToastMessage.js";
import EventListButtons from "./EventListButtons.js";
import AxiosInstance from "../api/api.js";
import { Spinner } from "react-bootstrap";

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showToastM: false,
      selectedEventName: "",
      toastMessage: "",     
      eventsData: [],
      loading: true,
      checkedItems: [],      
    };
    this.closeModal = this.closeModal.bind(this);
    this.updatedToastMessage = this.updatedToastMessage.bind(this);      
  }
 
  

  componentDidMount() {   
    this.props.clickEvent({
      pageName: "EventManagement",
      headerText: "EVENT MANAGEMENT",
      subHeaderText: "GLOBAL",
    })
    AxiosInstance.post("/DISP_DISPLAY_EVENT_LIST?UserID=502663088")
      .then((response) => {       
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
  render() {
    return (
      <div className="container-lg w-100 p-3 borderStyle mb-5 gs-container">
        {this.state.loading ? (
          <Spinner className="gs-loader" animation="border" />
        ) : (
          <Fragment>
            <div className="gs_event-header">              
              <div className="search gs-search">
                <input
                  type="text"
                  name="search"
                  className="round borderStyle"
                  placeholder="search"
                />
                <input type="submit" className="corner" value="" />
              </div>             
            </div>

            {this.state.eventsData.map(({ EVENT_NAME }, index) => {
              return (
                <div className="gs-table-row borderStyle" key={index}>
                  <div className="gs-inner-row borderStyle">
                    <h6>Event Name</h6>
                    <div className="gs_event-col">{EVENT_NAME}</div>
                  </div>
                  <EventListButtons eventName={EVENT_NAME} parentCallback={this.handleCallback} toastMessage={this.updatedToastMessage}/>                  
                </div>
              );
            })}

            {this.state.showModal && (
              <ViewSchedule
                openModal={this.state.showModal}
                closeModal={this.closeModal}
                eventName={this.state.selectedEventName}
                toastMessage={this.updatedToastMessage}
              />
            )}
            {this.state.toastMessage && (
              <ToastMessage
                showToast={this.state.showToastM}
                updateToast={this.updatedToastMessage}
                toastMessage={this.state.toastMessage}               
              />
            )}
          </Fragment>
        )}
      </div>
    );
  }
}
