import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
const UserManagement = (props) => {
  const [initialValue, setinitialValue] = useState({
    Org: "",
    Space: "",
  });
  console.log("props NewProvisioning", props);

  const resetValue = () => {
    setinitialValue({
      Org: "",
      Space: "",
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
        <Row>
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label className="select-label">Admin Users</Form.Label>
            <select class="form-select classic" style={{ height: "40px" }}>
              <option selected> Select User </option>
              <option value="Org1">user1</option>
              <option value="Org2">user2</option>
              <option value="Org3">user3</option>
            </select>
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label className="select-label">SSO Search</Form.Label>
            <Form.Control
              type="text"
              name="SSO"
              placeholder="Search SSO"
              //   value={values.Org}
              //   onChange={handleChange}
              //   // isValid={touched.BusinessName && !errors.BusinessName}
              //   isInvalid={!!errors.Org}
            />
          </Form.Group>
        </Row>
        <div className="mb-3 row">
          <div
            classsName="d-flex justify-content-between"
            style={{ margin: " 3% 30%" }}
          >
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UserManagement;
