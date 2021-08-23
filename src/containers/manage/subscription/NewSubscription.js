import React, { useState } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";
import BucAdnComponent from "../threadConnect/BucAdnComponent.js";
const NewSubscription = (props) => {
  const [initialValue, setinitialValue] = useState({
    Org: "",
    Space: "",
    BUC: "",
    ADN: "",
    Products: [],
  });
  console.log("props NewProvisioning", props);

  const resetValue = () => {
    setinitialValue({
      Org: "",
      Space: "",
      BUC: "",
      ADN: "",
      Products: [],
    });
  };
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label>Org</Form.Label>
            <Form.Control
              type="text"
              name="Org"
              placeholder="Please Enter Org"
              //   value={values.Org}
              //   onChange={handleChange}
              //   // isValid={touched.BusinessName && !errors.BusinessName}
              //   isInvalid={!!errors.Org}
            />
            <Form.Control.Feedback type="invalid">
              {/* {errors.Org} */}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik03">
            <Form.Label>Space</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter Space"
              name="Space"
              //   value={values.Space}
              //   onChange={handleChange}
              //   isInvalid={!!errors.Space}
            />

            <Form.Control.Feedback type="invalid">
              {/* {errors.Space} */}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3" style={{ marginLeft: "30px" }}>
          <BucAdnComponent />
        </Row>
        <Row className="mb-3">
          {/* <Row className="mb-3">
              <div id="checkbox-group">Products</div>
              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="Products" value="ThreadConnect" />
                  ThreadConnect
                </label>
                <label>
                  <Field type="checkbox" name="Products" value="EnterpriseConnect" />
                  EnterpriseConnect
                </label>
                <label>
                  <Field type="checkbox" name="Products" value="DIVE" />
                  DIVE
                </label>
              </div>
            </Row> */}
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik03"
            style={{ display: "flex" }}
          >
            <div id="checkbox-group">Products :</div>
            <div
              style={{
                display: "flex",
                marginLeft: " 20px",
              }}
            >
              <Form.Check
                label="ThreadConnect"
                type="checkbox"
                name="Products"
                value="ThreadConnect"
                id="Products"
              />
              <Form.Check
                label="EnterpriseConnect"
                type="checkbox"
                name="Products"
                value="EnterpriseConnect"
                id="Products"
                style={{ marginLeft: " 10px" }}
              />
              <Form.Check
                label="DIVE"
                type="checkbox"
                name="Products"
                id="Products"
                value="DIVE"
                style={{ marginLeft: " 10px" }}
              />
            </div>
          </Form.Group>
        </Row>
        <div className="mb-3 row">
          <div
            classsName="d-flex justify-content-between"
            style={{ margin: " 0% 30%" }}
          >
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default NewSubscription;
