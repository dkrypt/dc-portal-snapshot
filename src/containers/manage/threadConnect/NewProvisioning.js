import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormRadio from "./FormRadio.js";
import BucAdnComponent from "./BucAdnComponent.js";

const NewProvisioning = (props) => {
  const [advanceOption, setadvanceOption] = useState(false);
  const [env, setenv] = useState("Dev");
  // const [InstanceName, setInstanceName] = useState("");
  // const [BucAdn, setBucAdn] = useState("");
  const [initialValue, setinitialValue] = useState({
    BusinessName: "",
    ShortDescription: "",
    BUC: "",
    ADN: "",
    Env: env,
    MinMemory: "8",
    MaxMemory: "12",
    MinCpu: "4",
    MaxCpu: "5",
    ReplicaCount: "1",
    InstanceName: "",
  });

  console.log("props NewProvisioning", props);
  const handleChangeProject = (env) => {
    setenv(env);
    resetValue();
  };
  // const InstanceHandleChange = (e) => {
  //   // alert(e.target.value);
  //   setInstanceName(e.target.value);
  // };
  const resetValue = () => {
    // alert("hii");
    setinitialValue({
      BusinessName: "",
      ShortDescription: "",
      BUC: "",
      ADN: "",
      Env: "Dev",
      MinMemory: "8",
      MaxMemory: "12",
      MinCpu: "4",
      MaxCpu: "5",
      ReplicaCount: "1",
      InstanceName: "",
    });
  };
  const advanceHandelChange = () => {
    setadvanceOption(!advanceOption);
  };
  console.log("env", env);

  return (
    <div>
      <Row>
        <Form.Group
          style={{ marginLeft: "6px" }}
          as={Row}
          className="mb-3"
          onChange={(e) => handleChangeProject(e.target.value)}
        >
          <Form.Label as="legend" column sm={4} style={{ width: "45px" }}>
            Env:
          </Form.Label>
          <Col sm={6} style={{ display: "flex", marginTop: "8px" }}>
            <FormRadio env="Dev" />
            <FormRadio env="Stage" />
            <FormRadio env="Prod" />
          </Col>
        </Form.Group>
      </Row>

      <Form>
        {env === "Dev" ? (
          //Business Name and Description
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>BusinessName</Form.Label>
              <Form.Control
                type="text"
                name="BusinessName"
                placeholder="BusinessName"
                // value={values.BusinessName}
                // onChange={handleChange}
                // isValid={touched.BusinessName && !errors.BusinessName}
                // isInvalid={!!errors.BusinessName}
              />
              <Form.Control.Feedback type="invalid">
                {/* {errors.BusinessName} */}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>ShortDescription</Form.Label>
              <Form.Control
                type="text"
                placeholder="ShortDescription"
                name="ShortDescription"
                // value={values.ShortDescription}
                // onChange={handleChange}
                // isInvalid={!!errors.ShortDescription}
              />

              <Form.Control.Feedback type="invalid">
                {/* {errors.ShortDescription} */}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        ) : (
          // Instance Name
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label className="select-label">Instance Name</Form.Label>

              <select
                className="form-select classic"
                // value={values.InstanceName}
                // onChange={InstanceHandleChange}
                // onchange={handleChange}
                style={{ height: "40px" }}
                // isInvalid={!!errors.InstanceName}
              >
                <option selected> select InstanceName </option>
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
          <Row className="mb-3" style={{ marginLeft: "18px" }}>
            <BucAdnComponent />
          </Row>
        ) : (
          ""
        )}
        {/* ------------------------advance opyion --------------------------------*/}
        <Row className="mb-3" style={{ marginLeft: "8px" }}>
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
              />
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationFormik04">
              <Form.Label>Min Cpu</Form.Label>
              <Form.Control
                type="Number"
                name="MinCpu"
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
