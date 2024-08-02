/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import {
  ABOUT_US_ROUTE,
  BENEFITS_ROUTE,
  CONTACT_ROUTE,
  NEWS_AND_EVENTS_ROUTE,
} from "../../router/routes/routeName";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer px-5">
          <Row className="row-grid align-items-center mb-0">
            <Col>
              <p className="text-primary font-weight-light">
                Thank you for supporting us!{" "}
                <span className="mb-0 font-weight-light text-gray">
                  Let's get in touch on any of these platforms.
                </span>
              </p>
            </Col>
            <Col className="text-lg-right btn-wrapper">
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
                    href={`${process.env.REACT_APP_BASE_API_URL}${ABOUT_US_ROUTE}`}
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={`${process.env.REACT_APP_BASE_API_URL}${CONTACT_ROUTE}`}
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={`${process.env.REACT_APP_BASE_API_URL}${NEWS_AND_EVENTS_ROUTE}`}
                  >
                    News & Events
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={`${process.env.REACT_APP_BASE_API_URL}${BENEFITS_ROUTE}`}
                  >
                    Benefits
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </footer>
      </>
    );
  }
}

export default Footer;
