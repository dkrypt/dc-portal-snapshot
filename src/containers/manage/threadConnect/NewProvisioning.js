import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormRadio from "./FormRadio.js";
import BucAdnComponent from "./BucAdnComponent.js";
import Orgspaceinstance from "../orgSpaceInstance/OrgSpaceInstance.js";
// import { useFormik } from "formik";
// import "./NewProvisioning.css";
// const initialValues = {
//   ProjectName: "",
//   ShortDescription: "",
//   ShortName: "",
// GitRepositary:"",
// Ci_Name:"",
// VLan:"",
//   BUC: "",
//   ADN: "",
//   Env: "",
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
// if (!values.ShortDescription) {
//   errors.ShortDescription = "Required";
// }
//   if (!values.ShortName) {
//     errors.ShortName = "Required";
//   }
// if (!values.GitRepositary) {
//   errors.GitRepositary = "Required";
// }
//   if (!values.Ci_Name) {
//     errors.Ci_Name = "Required";
//   }
//     if (!values.VLan) {
//       errors.VLan = "Required";
//     }

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
const NewProvisioning = (props) => {
  const [advanceOption, setadvanceOption] = useState(false);
  const [env, setenv] = useState("Dev");

  console.log("props NewProvisioning", props);
  const handleChangeProject = (env) => {
    setenv(env);
    // resetValue();
  };

  const advanceHandelChange = () => {
    setadvanceOption(!advanceOption);
  };
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
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                name="Project Name"
                placeholder="Project Name"
                // isValid={validate.BusinessName && validate.BusinessName}
                // isInvalid={validate.BusinessName}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.ProjectName}
              />
              <Form.Control.Feedback type="invalid">
                {/* {errors.BusinessName} */}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Short Description"
                name="ShortDescription"
                // value={values.ShortDescription}
                // onChange={handleChange}
                // isInvalid={!!errors.ShortDescription}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.ShortDescription}
              />

              <Form.Control.Feedback type="invalid">
                {/* {errors.ShortDescription} */}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Short Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Short Name"
                name="ShortName"
                // value={values.ShortDescription}
                // onChange={handleChange}
                // isInvalid={!!errors.ShortDescription}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.ShortName}
              />

              <Form.Control.Feedback type="invalid">
                {/* {errors.ShortName} */}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>CI Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="CI Name"
                name="Ci_Name"
                // value={values.ShortDescription}
                // onChange={handleChange}
                // isInvalid={!!errors.ShortDescription}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.ShortDescription}
              />

              <Form.Control.Feedback type="invalid">
                {/* {errors.Ci_Name} */}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>VLAN</Form.Label>
              <Form.Control
                type="text"
                placeholder="VLAN"
                name="VLan"
                // value={values.ShortDescription}
                // onChange={handleChange}
                // isInvalid={!!errors.ShortDescription}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.ShortName}
              />

              <Form.Control.Feedback type="invalid">
                {/* {errors.VLan} */}
              </Form.Control.Feedback>
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
                <option defaultValue> select InstanceName </option>
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
        <Row
          className="mb-3 form-switch"
          //  style={{ marginLeft: "8px" }}
        >
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Advance Option"
            onChange={() => advanceHandelChange()}
          />
        </Row>
        {advanceOption === true ? (
          <Row className="mb-3">
            <Form.Group as={Col} md="2" controlId="validationFormik02">
              <Form.Label>Min Memory</Form.Label>
              <Form.Control
                type="Number"
                name="MinMemory"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.MinMemory}
                // value={values.MinMemory}
                // onChange={handleChange}
                // isValid={touched.MinMemory && !errors.MinMemory}
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik04">
              <Form.Label>Max Memory</Form.Label>
              <Form.Control
                type="Number"
                name="MaxMemory"
                // value={values.MaxMemory}
                // onChange={handleChange}
                // isValid={touched.MaxMemory && !errors.MaxMemory}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.MaxMemory}
              />
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationFormik04">
              <Form.Label>Min Cpu</Form.Label>
              <Form.Control
                type="Number"
                name="MinCpu"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.MinCpu}
                // value={values.MinCpu}
                // onChange={handleChange}
                // isValid={touched.MinCpu && !errors.MinCpu}
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik04">
              <Form.Label>Max Cpu</Form.Label>
              <Form.Control
                type="Number"
                name="MaxCpu"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.MaxCpu}
                // value={values.MaxCpu}
                // onChange={handleChange}
                // isValid={touched.MaxCpu && !errors.MaxCpu}
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik04">
              <Form.Label>Replica Count</Form.Label>
              <Form.Control
                type="Number"
                name="ReplicaCount"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.ReplicaCount}
                // value={values.ReplicaCount}
                // onChange={handleChange}
                /*    isValid={touched.ReplicaCount && !errors.ReplicaCount} */
              />
            </Form.Group>
          </Row>
        ) : (
          ""
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default NewProvisioning;
