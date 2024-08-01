/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row className="row-grid align-items-center">
              <Col lg="6">
                <h4 className=" text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h4>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-right btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle mr-4"
                  color="facebook"
                  href="https://www.facebook.com/profile.php?id=100093956561793"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="whatsapp"
                  href="https://wa.me/+917204415208"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-whatsapp" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Connect on Whatsapp
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center">
              <Col lg="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    OWJC Office
                  </a>
                  .
                </div>
              </Col>
              <Col lg="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://blog.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                    >
                      Contact
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
