import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormRadio from "./FormRadio.js";
import BucAdnComponent from "./BucAdnComponent.js";
// import { useFormik } from "formik";
// import "./NewProvisioning.css";
// const initialValues = {
//   ProjectName: "",
//   ShortDescription: "",
//   ShortName: "",
//   BUC: "",
//   ADN: "",
//   Env: "Dev",
//   MinMemory: "8",
//   MaxMemory: "12",
//   MinCpu: "4",
//   MaxCpu: "5",
//   ReplicaCount: "1",
//   InstanceName: "",
// };
// const onSubmit = (values) => {
//   alert(JSON.stringify(values, null, 2));
// };
// const validate = (values) => {
//   const errors = {};
//   if (!values.ProjectName) {
//     errors.ProjectName = "Required";
//   }
//   if (!values.ShortDescription) {
//     errors.ShortDescription = "Required";
//   }
//   if (!values.ShortName) {
//     errors.ShortName = "Required";
//   }

//   if (!values.BUC) {
//     errors.BUC = "Required";
//   }
//   if (!values.ADN) {
//     errors.ADN = "Required";
//   }
//   if (!values.Env) {
//     errors.Env = "Required";
//   }
//   if (!values.MinMemory) {
//     errors.MinMemory = "Required";
//   }
//   if (!values.MaxMemory) {
//     errors.MaxMemory = "Required";
//   }
//   if (!values.MinCpu) {
//     errors.MinCpu = "Required";
//   }
//   if (!values.MaxCpu) {
//     errors.MaxCpu = "Required";
//   }
//   if (!values.ReplicaCount) {
//     errors.ReplicaCount = "Required";
//   }
//   if (!values.InstanceName) {
//     errors.InstanceName = "Required";
//   }
//   // if (!values.email) {
//   //   errors.email = "Required";
//   // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//   //   errors.email = "Invalid email address";
//   // }
//   return errors;
// };
const UpdateManagement = (props) => {
  // const [advanceOption, setadvanceOption] = useState(false);
  const [env, setenv] = useState("Dev");

  console.log("props NewProvisioning", props);
  const handleChangeProject = (env) => {
    setenv(env);
    // resetValue();
  };

  // const advanceHandelChange = () => {
  //   setadvanceOption(!advanceOption);
  // };
  console.log("env", env);
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validate,
  // });

  return (
    <div>
      <Row>
        <Form.Group
          // style={{ marginLeft: "6px" }}
          as={Row}
          className="mb-3 form-mar"
          onChange={(e) => handleChangeProject(e.target.value)}
        >
          <Form.Label
            as="legend"
            column
            sm={4}
            // style={{ width: "45px" }}
            className="form-wid"
          >
            Env:
          </Form.Label>
          <Col
            sm={6}
            className="col-radio"
            //  style={{ display: "flex", marginTop: "8px" }}
          >
            <FormRadio env="Dev" />
            <FormRadio env="Stage" />
            <FormRadio env="Prod" />
          </Col>
        </Form.Group>
      </Row>

      {/* <Form onSubmit={formik.handleSubmit}> */}
      <Form>
        {env === "Dev" ? (
          //Business Name and Description
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label className="select-label">Project Name</Form.Label>

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
                // value={formik.values.ProjectName}
              >
                <option defaultValue> Select ProjectName </option>
                <option value="ProjectName1">ProjectName1</option>
                <option value="ProjectName2">ProjectName2</option>
                <option value="ProjectName3">ProjectName3</option>
              </select>
              <Form.Control.Feedback type="invalid">
                {/* {errors.ProjectName} */}
              </Form.Control.Feedback>
              {/* </FloatingLabel> */}
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label className="select-label">
                Short Description
              </Form.Label>

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
                // value={formik.values.ShortDescription}
              >
                <option defaultValue> Select ShortDescription </option>
                <option value="ShortDescription1">ShortDescription1</option>
                <option value="ShortDescription2">ShortDescription2</option>
                <option value="ShortDescription3">ShortDescription3</option>
              </select>
              <Form.Control.Feedback type="invalid">
                {/* {errors.InstanceName} */}
              </Form.Control.Feedback>
              {/* </FloatingLabel> */}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label className="select-label">Short Name</Form.Label>{" "}
              <br></br>
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
                // value={formik.values.ShortDescription}
              >
                <option defaultValue> Select ShortName </option>
                <option value="ShortName1">ShortName1</option>
                <option value="ShortName2">ShortName2</option>
                <option value="ShortName3">ShortName3</option>
              </select>
              <Form.Control.Feedback type="invalid">
                {/* {errors.InstanceName} */}
              </Form.Control.Feedback>
              {/* </FloatingLabel> */}
            </Form.Group>
          </Row>
        ) : (
          // Instance Name
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label className="select-label">Instance Name</Form.Label>

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
        )}
        {env === "Dev" ? (
          <Row
            className="mb-3 bucAdnCom"
            // style={{ marginLeft: "18px" }}
          >
            <BucAdnComponent />
          </Row>
        ) : (
          ""
        )}
        {/* ------------------------advance opyion --------------------------------*/}
        {/* <Row
          className="mb-3 form-switch"
          //  style={{ marginLeft: "8px" }}
        >
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Advance Option"
            onChange={() => advanceHandelChange()}
          />
        </Row> */}

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default UpdateManagement;
