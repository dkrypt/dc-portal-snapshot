import React from "react";
// import { Grid } from "react-bootstrap";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import NativeSelect from "@material-ui/core/NativeSelect";
import { Form, Row, Col } from "react-bootstrap";
// import Category from "./Category.js";

const Orgspaceinstance = (props) => {
  const [org, setorg] = React.useState("");
  const [space, setspace] = React.useState("");
  const [instance, setinstance] = React.useState("");
  console.log("org", org);
  console.log("space", space);
  console.log("instance", instance);
  //HandleChange
  const handleChanges = (event) => {
    switch (event.target.id) {
      case "instance":
        setinstance(event.target.value);
        break;
      case "space":
        setspace(event.target.value);
        break;
      case "org":
        setorg(event.target.value);
        break;
      default:
    }
  };
  /*
  //Handle Org
  const handleChange = (event) => {
    setorg(event.target.value);
  };

  //Handle Space
  const handleChangeSpace = (event) => {
    setspace(event.target.value);
  };

  //Handle Instance
  const handleChangeInstane = (event) => {
    setinstance(event.target.value);
  };
  //   console.log("org", org); */
  return (
    <div>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationFormik03">
          <Form.Label className="select-label">Org</Form.Label>

          <select
            className="form-select classic select-height"
            // value={values.InstanceName}
            // onChange={InstanceHandleChange}
            // onchange={handleChange}
            // style={{ height: "40px" }}
            // isInvalid={!!errors.InstanceName}
            // defaultValue=""
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.InstanceName}
          >
            <option defaultValue> Select org </option>
            <option value="org1">Org1</option>
            <option value="org2">Org2</option>
            <option value="org3">Org3</option>
          </select>
          <Form.Control.Feedback type="invalid">
            {/* {errors.InstanceName} */}
          </Form.Control.Feedback>
          {/* </FloatingLabel> */}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationFormik03">
          <Form.Label className="select-label">Space</Form.Label>

          <select
            className="form-select classic select-height"
            // value={values.InstanceName}
            // onChange={InstanceHandleChange}
            // onchange={handleChange}
            // style={{ height: "40px" }}
            // isInvalid={!!errors.InstanceName}
            // defaultValue=""
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.InstanceName}
          >
            <option defaultValue> Select Space </option>
            <option value="Space1">Space1</option>
            <option value="Space2">Space2</option>
            <option value="Space3">Space3</option>
          </select>
          <Form.Control.Feedback type="invalid">
            {/* {errors.Space} */}
          </Form.Control.Feedback>
          {/* </FloatingLabel> */}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationFormik03">
          <Form.Label className="select-label">Instance</Form.Label>

          <select
            className="form-select classic select-height"
            // value={values.InstanceName}
            // onChange={InstanceHandleChange}
            // onchange={handleChange}
            // style={{ height: "40px" }}
            // isInvalid={!!errors.InstanceName}
            // defaultValue=""
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.InstanceName}
          >
            <option defaultValue> Select InstanceName </option>
            <option value="InstanceName1">InstanceName1</option>
            <option value="InstanceName2">InstanceName2</option>
            <option value="InstanceName3">InstanceName3</option>
          </select>
          <Form.Control.Feedback type="invalid">
            {/* {errors.InstanceName} */}
          </Form.Control.Feedback>
          {/* </FloatingLabel> */}
        </Form.Group>
      </Row>
    </div>
  );
};
export default Orgspaceinstance;
