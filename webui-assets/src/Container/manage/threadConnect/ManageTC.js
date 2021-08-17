import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import NewProvisioning from "./NewProvisioning.js";
import UpdateManagement from "./UpdateManagement.js";
function ThreadConnect() {
  return (
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-header">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={12}>
                  <Nav variant="pills" className="flex-row">
                    <Col sm={3}>
                      <Nav.Item className="card" style={{ textAlign: "center" }}>
                        <Nav.Link eventKey="first">New Provisioning</Nav.Link>
                      </Nav.Item>
                    </Col>
                    <Col sm={3}>
                      <Nav.Item className="card" style={{ textAlign: "center" }}>
                        <Nav.Link eventKey="second">Update Management</Nav.Link>
                      </Nav.Item>
                    </Col>
                    <Col sm={3}>
                      <Nav.Item className="card" style={{ textAlign: "center" }}>
                        <Nav.Link eventKey="third">Deployment</Nav.Link>
                      </Nav.Item>
                    </Col>
                    <Col sm={3} className="card" style={{ textAlign: "center" }}>
                      <Nav.Item>
                        <Nav.Link eventKey="four">File-Placement</Nav.Link>
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
                      <NewProvisioning />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <UpdateManagement />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third"> Deployment </Tab.Pane>
                    <Tab.Pane eventKey="four">File-Placement</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadConnect;
