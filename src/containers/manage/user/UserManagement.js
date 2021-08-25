import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import OrgSpaceInstance from "../orgSpaceInstance/OrgSpaceInstance.js";
import AdminBox from "./AdminBox.js";
import SearchModal from "./SearchModal.js";
const UserManagement = (props) => {
  // const [initialValue, setinitialValue] = useState({
  //   SSO: "",
  //   Admin: [],
  // });
  const [sso, setSSO] = useState("Search SSO");
  const [adminList, setAdminList] = useState([]);
  useEffect(() => {}, [setAdminList]);

  // const resetValue = () => {
  //   setinitialValue({
  //     Org: "",
  //     Space: "",
  //   });
  // };

  //Handle SSO change
  const handleChange = (event) => {
    console.log(sso);
    setSSO(event.target.value);
  };

  //Add Admin to Array
  const addAdmin = (value) => {
    console.log("Recieved Value", value);
    console.log("AdminList", adminList);
    let flag = 2;

    let newAdminList = adminList;

    if (adminList.length === 0) {
      newAdminList.push(value);
      setAdminList(newAdminList);
    } else {
      adminList &&
        adminList.filter((element) => {
          console.log("element=", element);
          if (element.Id === value.Id) {
            flag = 0;
          } else {
            flag = 1;
          }
          return flag === 1
            ? setAdminList(newAdminList.push(value))
            : alert("user exist");
        });

      console.log("Flag", flag);
    }
  };
  //Clear SSO
  const clearSSO = (event) => {
    setSSO("Search SSO");
  };

  return (
    <>
      {/* <Form> */}
      <OrgSpaceInstance />
      {/* <AdminBox adminData={adminList} /> */}
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Col>
          <AdminBox adminData={adminList} label="Admin user" />
          <Form.Group as={Col} md="12" controlId="validationFormik01">
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <Form.Control
                  type="text"
                  name="SSO"
                  placeholder="SSO Search"
                  //   value={values.Org}
                  onChange={handleChange}
                  //   // isValid={touched.BusinessName && !errors.BusinessName}
                  //   isInvalid={!!errors.Org}
                />
              </div>
              <div>
                <SearchModal
                  sso={sso}
                  addAdmin={addAdmin}
                  clearSSO={clearSSO}
                />
              </div>
            </div>
          </Form.Group>
        </Col>
        <Col>
          <AdminBox adminData={adminList} label="content1" />
          <Form.Group as={Col} md="12" controlId="validationFormik01">
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <Form.Control
                  type="text"
                  name="SSO"
                  placeholder="content1 Search"
                  //   value={values.Org}
                  onChange={handleChange}
                  //   // isValid={touched.BusinessName && !errors.BusinessName}
                  //   isInvalid={!!errors.Org}
                />
              </div>
              <div>
                <SearchModal
                  sso={sso}
                  addAdmin={addAdmin}
                  clearSSO={clearSSO}
                />
              </div>
            </div>
          </Form.Group>
        </Col>
        <Col>
          <AdminBox adminData={adminList} label="content2" />
          <Form.Group as={Col} md="12" controlId="validationFormik01">
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <Form.Control
                  type="text"
                  name="SSO"
                  placeholder="content2 Search"
                  //   value={values.Org}
                  onChange={handleChange}
                  //   // isValid={touched.BusinessName && !errors.BusinessName}
                  //   isInvalid={!!errors.Org}
                />
              </div>
              <div>
                <SearchModal
                  sso={sso}
                  addAdmin={addAdmin}
                  clearSSO={clearSSO}
                />
              </div>
            </div>
          </Form.Group>
        </Col>
        <Col>
          <AdminBox adminData={adminList} label=" content3" />
          <Form.Group as={Col} md="12" controlId="validationFormik01">
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <Form.Control
                  type="text"
                  name="SSO"
                  placeholder="content3 Search"
                  //   value={values.Org}
                  onChange={handleChange}
                  //   // isValid={touched.BusinessName && !errors.BusinessName}
                  //   isInvalid={!!errors.Org}
                />
              </div>
              <div>
                <SearchModal
                  sso={sso}
                  addAdmin={addAdmin}
                  clearSSO={clearSSO}
                />
              </div>
            </div>
          </Form.Group>
        </Col>
      </Row>
      <div className="mb-3 row">
        <div
          className="d-flex justify-content-between"
          style={{ margin: " 3% 45%" }}
        >
          <Button type="submit">Submit</Button>
        </div>
      </div>
      {/* </Form> */}
    </>
  );
};

export default UserManagement;
