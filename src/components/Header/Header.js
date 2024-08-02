import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row,
  UncontrolledCollapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ABOUT_US_ROUTE,
  BENEFITS_ROUTE,
  CONTACT_ROUTE,
  NEWS_AND_EVENTS_ROUTE,
} from "../../router/routes/routeName";

const Header = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-light headroom bg-secondary px-5" expand="lg">
          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            <img
              alt="..."
              src={require("../../assets/img/brand/logo.png")}
              style={{ maxWidth: "20%", height: "20%" }}
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar_global">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            toggler="#navbar_global"
            navbar
            className={collapseClasses}
            onExiting={onExiting}
            onExited={onExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={require("../../assets/img/brand/logo.png")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar_global">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-lg-auto" navbar>
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
          </UncontrolledCollapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
