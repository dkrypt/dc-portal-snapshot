import React, { useEffect } from "react";
import { Button } from 'react-bootstrap';


export const DisableAccount = ({clickEvent, eventName}) => {
  useEffect(() => {
    clickEvent({
      pageName: "DisableAccount",
      headerText: "DISABLE ACCOUNT",
      subHeaderText: "GLOBAL",
    })
  }, []);
  return (
    <div className="container-lg w-100 p-3 borderStyle mb-5">
    <h5>Disable Account</h5>
    <form>
      <div className="form-group row">
        <label for="inputPassword" className="col-sm-3 col-form-label">GlobalScape Account Name</label>
        <div className="col-sm-6">
          <i className="fa fa-user icon"></i>
          <input className="form-control form-control-sm" type="text" id="gs_eve-name" name="gs_eve-name" value={eventName} />
        </div>
      </div>
      <div className="form-group row">
      <div className="col-sm-10 text-center">
        <Button variant="primary" onClick="">
          Disable
        </Button>
        </div>
      </div>
    </form>
  </div>
  );
}
