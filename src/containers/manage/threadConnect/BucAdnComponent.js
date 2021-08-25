import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
// import { useFormik } from "formik";
// const initialValues = {
//   BUC: "",
//   ADN: "",
// };
// const onSubmit = (values) => {
//   alert(JSON.stringify(values, null, 2));
// };
// const validate = (values) => {
//   const errors = {};
//   if (!values.BUC) {
//     errors.BUC = "Required";
//   }
//   if (!values.ADN) {
//     errors.ADN = "Required";
//   }
//   // if (!values.email) {
//   //   errors.email = "Required";
//   // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//   //   errors.email = "Invalid email address";
//   // }
//   return errors;
// };
let BucAdnComponent = (props) => {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validate,
  // });
  return (
    <>
      {/* <Form style={{ marginLeft: "-18px" }} onSubmit={formik.handleSubmit}> */}
      <Form style={{ marginLeft: "-18px" }}>
        <Row className="mb-4">
          <Form.Group as={Col} md="5" controlId="validationFormik05">
            <Form.Label>BUC</Form.Label>
            <Form.Control
              type="text"
              placeholder="BUC"
              name="BUC"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.BUC}
            />

            <Form.Control.Feedback type="invalid">
              {/* {errors.BUC} */}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationFormik05">
            <Form.Label>ADN</Form.Label>
            <Form.Control
              type="text"
              placeholder="ADN"
              name="ADN"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.ADN}
            />

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
    </>
  );
};
export default BucAdnComponent;
