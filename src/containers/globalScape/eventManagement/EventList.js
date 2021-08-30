import React, { Fragment } from "react";
import ViewSchedule from "./ViewSchedule.js";
import ToastMessage from "../ToastMessage.js";
import AxiosInstance from "../api/api.js";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showToastM: false,
      selectedEventName: "",
      toastMessage: "",
      // eventsData: [],
      loading: true,
      checkedItems: [],
      
      eventsData: [
        {
          EVENT_NAME:
            "ABC_123_GHI",
          ssoID: "122344",
        },
        {
          EVENT_NAME:
            "DEF-234_PQR",
          ssoID: "122344",
        },
        {
          EVENT_NAME:
            "GHI_456_ABC",
          ssoID: "122344",
        },
        {
          EVENT_NAME:
            "LMN_678_IJK",
          ssoID: "122344",
        },
        {
          EVENT_NAME:
            "MNO_890_XYZ",
          ssoID: "122344",
        },
      ],
    };
    this.closeModal = this.closeModal.bind(this);
    this.updatedToastMessage = this.updatedToastMessage.bind(this);
    this.handleChecked = this.handleChecked.bind(this); 
  }

  

  handleChecked = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const checkedItems = [...this.state.checkedItems];
    if(isChecked){
      checkedItems.push(item);
    }else{
      checkedItems.splice(checkedItems.indexOf(item),1);
    }
    this.setState({checkedItems:checkedItems},()=>{
      console.log("Event list name:", this.state.checkedItems);
    });
    
};

  componentDidMount() {
    this.setState({ loading: false });
    // axios
    //   .post("/02/SelfServicePortal/DISP_DISPLAY_EVENT_LIST?UserID=502663088")

    //   .then((response) => {
    //     // Handle response after CORS resolution
    //     this.setState({ eventsData: response.data, loading: false });
    //     console.log("Event data :", this.state.eventsData);
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
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

  runNow(){
    this.updatedToastMessage(true,'Event is running')
  }

  render() {
    return (
      <div className="container-lg w-100 p-3 borderStyle mb-5 gs-container">
        {this.state.loading ? (
          <Spinner className="gs-loader" animation="border" />
        ) : (
          <Fragment>
            <div className="gs_event-header">
              <ul>
                <li>
                  <div className="search gs-search">
                    <input
                      type="text"
                      name="search"
                      className="round borderStyle"
                      placeholder="search"
                    />
                    <input type="submit" className="corner" value="" />
                  </div>
                </li>
                <li>
                  <button
                    className="gs-btn green"
                     onClick={() => this.runNow()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-lines-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                    </svg>
                    <span>Run Now</span>
                  </button>
                </li>
                <li>
                  <button
                    className="gs-btn orange"
                    // onClick={() => this.showEnableFun(EVENT_NAME)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      <path
                        fillRule="evenodd"
                        d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                    <span>Enable</span>
                  </button>
                </li>
                <li>
                  <button className="gs-btn purple">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      <path
                        fillRule="evenodd"
                        d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <span>Disable</span>
                  </button>
                </li>
                <li>
                  <button
                    className="gs-btn maroon"
                    // onClick={() => this.assignSsoFun(EVENT_NAME)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-diagram-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                      />
                    </svg>
                    <span>Assign Group</span>
                  </button>
                </li>
              </ul>
            </div>

            <table id="gs_event-table" className="table">
              <tbody>
                {this.state.eventsData.map(({ EVENT_NAME }, index) => {
                  return (
                    <tr key={index}>
                      
                      <td className="gs_event-col">
                      <input
                          type="checkbox"                          
                          name={EVENT_NAME}                       
                          value={EVENT_NAME}
                          onChange={ this.handleChecked }
                          checked={this.state.checkedItems.indexOf(EVENT_NAME) > -1}                         
                        />
                        <span>{EVENT_NAME}</span></td>

                      <td>
                        <button
                          className="gs-btn grey fix-btn"
                          onClick={() => this.showRunNowFun(EVENT_NAME)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-person-lines-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                          </svg>
                          <span>Modify Schedule</span>
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
