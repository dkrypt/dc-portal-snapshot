import React, { Fragment } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import NewSubscription from "./NewSubscription.js";
import UpdateSubscription from "./UpdateSubscription.js";
function ManageSubscription(props) {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="flex-row">
                      <Col sm={4}>
                        <Nav.Item className="card aligncenter">
                          <Nav.Link eventKey="first">New Subscription</Nav.Link>
                        </Nav.Item>
                      </Col>
                      <Col sm={4}>
                        <Nav.Item className="card aligncenter">
                          <Nav.Link eventKey="second">
                            Update Subscription
                          </Nav.Link>
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
                        <NewSubscription />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <UpdateSubscription />
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

export default ManageSubscription;
