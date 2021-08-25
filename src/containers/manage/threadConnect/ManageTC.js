import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import Orgspaceinstance from "../orgSpaceInstance/OrgSpaceInstance.js";
import NewProvisioning from "./NewProvisioning.js";
import UpdateManagement from "./UpdateManagement.js";
function ThreadConnect() {
  return (
    <>
      <Orgspaceinstance />
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="flex-row">
                      <Col sm={3}>
                        <Nav.Item className="card aligncenter">
                          <Nav.Link eventKey="first">New Provisioning</Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col sm={3}>
                        <Nav.Item className="card aligncenter">
                          <Nav.Link eventKey="second">
                            Update Management
                          </Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col sm={3}>
                        <Nav.Item className="card aligncenter">
                          <Nav.Link eventKey="third">Deployment</Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col sm={3}>
                        <Nav.Item className="card aligncenter">
                          <Nav.Link eventKey="four"> File-Placement</Nav.Link>
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
                      <Tab.Pane eventKey="third">
                        {" "}
                        <h1>Deployment </h1>{" "}
                      </Tab.Pane>
                      <Tab.Pane eventKey="four">
                        <h1>File-Placement</h1>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreadConnect;
