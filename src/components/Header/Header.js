import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row,
  UncontrolledCollapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ABOUT_US_ROUTE,
  BENEFITS_ROUTE,
  CONTACT_ROUTE,
  NEWS_AND_EVENTS_ROUTE,
} from "../../router/routes/routeName";
import Headroom from "headroom.js";

const Header = () => {
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  return (
    <>
      <header className="header-global mb-5">
        <Navbar
          className="navbar-main navbar-transparent bg-secondary headroom px-5 mb-5"
          expand="lg"
          id="navbar-main"
        >
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={require("../../assets/img/brand/logo.png")}
              style={{ width: "120px", height: "20%" }}
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
            <div className="navbar-collapse-header ">
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
                <NavLink href={`${ABOUT_US_ROUTE}`} className="text-gray">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`${CONTACT_ROUTE}`} className="text-gray">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={`${NEWS_AND_EVENTS_ROUTE}`}
                  className="text-gray"
                >
                  News & Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`${BENEFITS_ROUTE}`} className="text-gray">
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
