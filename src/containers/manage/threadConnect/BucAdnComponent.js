import React, { useState } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";

let BucAdnComponent = (props) => {
  const [initialValue, setInitialValue] = useState({
    BUC: "",
    ADN: "",
  });
  const resetValue = () => {
    setInitialValue({
      BUC: "",
      ADN: "",
    });
  };
  return (
    <Form style={{ marginLeft: "-18px" }}>
      <Row className="mb-4">
        <Form.Group as={Col} md="4" controlId="validationFormik05">
          <Form.Label>BUC</Form.Label>
          <Form.Control type="text" placeholder="BUC" name="BUC" />

          <Form.Control.Feedback type="invalid">
            {/* {errors.BUC} */}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="7" controlId="validationFormik05">
          <Form.Label>ADN</Form.Label>
          <Form.Control type="text" placeholder="ADN" name="ADN" />

          <Form.Control.Feedback type="invalid">
            {/* {errors.ADN} */}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          style={{ marginTop: "31px" }}
          as={Col}
          md="1"
          controlId="validationFormik05"
        >
          <Button type="submit">Validate</Button>
        </Form.Group>
      </Row>
    </Form>
  );
};
export default BucAdnComponent;
