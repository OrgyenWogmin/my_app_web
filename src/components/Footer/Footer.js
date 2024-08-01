import React from "react";
import { Container, Row } from "reactstrap";

import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer() {
  return (
    <Container className="mb-4">
      <Row>
        <p style={{ display: "flex", justifyContent: "center" }}>
          © 2024 PrettyCoder
        </p>
      </Row>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <FaFacebook size={"20"} color={"#828282"} />
        <BiLogoGmail size={"20"} color={"#828282"} />
        <IoLogoWhatsapp size={"20"} color={"#828282"} />
      </div>
    </Container>
  );
}

export default Footer;
