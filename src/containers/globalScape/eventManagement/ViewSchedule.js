import React from "react";
import { Modal, Button } from 'react-bootstrap';


export default class ViewSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleTime: "",
      showCalender: false
    }
    this.onEnablebuttonClick = this.onEnablebuttonClick.bind(this);
  }
  handleScheduleTime(e) {
    this.setState({ scheduleTime: e.target.value })
    if (e.target.value === 'Once') {
      console.log("once clicked");
      this.setState({ showCalender: true })
    }
    if (e.target.value === 'Weekly') {
      console.log("Weekly clicked");
    }
  }
  onEnablebuttonClick(){
    this.props.closeModal();
    this.props.toastMessage(true,'View schedule saved');
  }

  render() {
      let showCalender = this.state
    
    return (
      <Modal show={this.props.openModal} onHide={this.props.closeModal}>
        {/* <Modal.Header>
          <Modal.Title>View Schedule</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <p className="form-group row">
            <label className="col-sm-4 col-form-label" htmlFor="gs_eve-name">Event Name*</label>
            <div className="col-sm-8"><input className="form-control form-control-sm" type="text" id="" name="" value={this.props.eventName} disabled />  </div>
          </p>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label" htmlFor="gs_eve-sso">Schedule</label>
            <div className="col-sm-8" onChange={this.handleScheduleTime.bind(this)}>
              <div className="radio">
                <label><input type="radio" name="optradio" value="Daily" onChange={this.handleScheduleTime} /> Daily</label>
              </div>
              <div className="radio">
                <label><input type="radio" name="optradio" value="Once" onChange={this.handleScheduleTime} /> Once</label>
              </div>
              <div className="radio">
                <label><input type="radio" name="optradio" value="Weekly" onChange={this.handleScheduleTime} /> Weekly</label>
              </div>
              <div className="radio">
                  <label><input type="radio" name="optradio" value="Monthly" onChange={this.handleScheduleTime}/> Monthly</label>
                </div>
                <div className="radio">
                  <label><input type="radio" name="optradio" value="Yearly" onChange={this.handleScheduleTime}/> Yearly</label>
                </div>
                <div className="radio ">
                  <label><input type="radio" name="optradio" value="Continually" onChange={this.handleScheduleTime}/> Continually</label>
                </div>
              {showCalender && (<div>
                <label for="birthday">Select Date:</label>
                <input type="date" id="birthday" name="date" />
                </div>)}
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.onEnablebuttonClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    );
  }
}
