import React, { Fragment } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import UserManagement from "./UserManagement.js";
function ManageUser(props) {
  return (
    <Fragment>
      <div class="container">
        <div class="row">
          <div class="card">
            <div class="card-header">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="flex-row">
                      <Col sm={4}>
                        <Nav.Item
                          className="card"
                          style={{ textAlign: "center" }}
                        >
                          <Nav.Link eventKey="first">New User</Nav.Link>
                        </Nav.Item>
                      </Col>
                    </Nav>
                  </Col>
                  <br></br>
                  <br></br>
                  <br></br>

                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <UserManagement />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ManageUser;
