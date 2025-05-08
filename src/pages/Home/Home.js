import React from "react";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import "./home.css";

const Home = () => {
  const items = [
    {
      src: require("../../assets/img/theme/img-1-1200x1000.jpg"),
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("../../assets/img/theme/img-2-1200x1000.jpg"),
      altText: "",
      caption: "",
      header: "",
    },
  ];
  return (
    <div className="py-5">
      {/* <Row className="justify-content-center align-items-center mt-5">
        <Col className="mb-5 mb-lg-0" lg="5">
          <p className="text-black font-weight-bold">
            To build Guru Rinpoche Statue & Preserve Buddha's Dharma
          </p>
          <h1 className="font-weight-bold text-primary bold">
            ORGYEN WOGMIN {<br />} JANGCHUB CHOELING
          </h1>
        </Col>
        <Col className="mb-lg-auto" lg="6">
          <div className="rounded shadow-lg overflow-hidden">
            <UncontrolledCarousel items={items} />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mt-5">
        <Col className="mb-5 mb-lg-0" lg="5">
          <h1 className="font-weight-bold text-primary bold">
            OUR BEGINNINGS{" "}
          </h1>
          <p className="text-black font-weight-light text-justify ">
            In the year 2003, His Holiness Pema Norbu Rinpoche had visited Luing
            Gonpa, Dirang. During his visit, the Tsechu Tsogpa, Dirang paid a
            visit to seek his blessing with the soil sample with an aim to build
            a statue/gonpa of Guru Rinpoche. His Holiness Penor Rinpoche after
            performing the consecration rituals on the soil, blessed us with his
            encouraging words on work undertaken by the Tsechu Tsogpa. Soon
            Tsechu Tsogpa started with the foundation laying work but sadly due
            to various obstacles and impediments, they were not able to continue
            the construction and had to stop it temporarily. After various
            efforts and deliberation, Lama Lobsang Dhargey has decided to resume
            the construction work of the statue of Guru Rinpoche on the
            auspicious day - 10th day of 5th month of Tibetan calendar(9th July
            2023).{" "}
          </p>
        </Col>
        <Col className="mb-lg-auto" lg="6">
          <Row className="justify-content-center">
            <Col lg="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("../../assets/img/theme/team-1-800x800.jpg")}
              />
            </Col>
            <Col lg="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("../../assets/img/theme/team-1-800x800.jpg")}
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col lg="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("../../assets/img/theme/team-1-800x800.jpg")}
              />
            </Col>
            <Col lg="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("../../assets/img/theme/team-1-800x800.jpg")}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center mt-5">
        <Col className="mb-lg-auto" lg="5">
          <img
            alt="..."
            className="img-fluid rounded shadow"
            src={require("../../assets/img/theme/team-1-800x800.jpg")}
          />
        </Col>
        <Col className="mb-5 mb-lg-0" lg="6">
          <h1 className="font-weight-bold text-primary bold">OUR FOUNDER </h1>
          <p className="text-black font-weight-light text-justify">
            <span className="text-primary font-weight-bold">
              Lama Lobsang Dhargey
            </span>{" "}
            will be heading this project with the help of people across Dirang
            circle. Initially when senior lamas requested him to take the
            responsibility of the Guru statue project, He was bit hesitant
            considering the responsibility involved for such a big project. But
            with their repeated request overtime, trust in him and the benefits
            it could have to the people of Dirang and the region at large, He
            eventually accepted the responsibility. Soon after, He requested His
            Holiness Sakya Trizin Rinpoche and His Eminence Sonam Gyatso
            Rinpoche for a divination regarding the project and it revealed once
            completed, the project would be of a huge beneficial. The revelation
            instantly made him realized about the merits and devotion of the
            people of Dirang Circle towards the Dharma. Encouraged by this
            revelation and support of the people of Dirang Circle, We resumed
            the construction work of the statue of Guru Rinpoche on the
            auspicious day - 10th day of 5th month of Tibetan calendar.(9th July
            2023).
          </p>
        </Col>
      </Row> */}
      <div
        style={{
          marginTop: 100,
        }}
        className="overflow-hidden hero-container"
      >
        <img
          alt="Sample"
          src={require("../../assets/img/theme/rinpoche monastery.jpeg")}
          style={{ width: "100%", height: "400px" }}
          className="hero-image"
        ></img>
        <div className="hero-text">
          <h1
            className="text-center bold "
            style={{
              fontFamily: "Liberation Mono",
              fontWeight: "bold",
              color: "#F5F1E3",
            }}
          >
            Welcome To
          </h1>
          <h1
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              color: "#C2A878",
            }}
          >
            ༄༅། ཨྱོན་འོག་མིན་བྱང་ཆུབ་ཆོས་གླིང་།{" "}
          </h1>{" "}
          <h1
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              color: "#C2A878",
            }}
          >
            ORGYEN WOGMIN JANGCHUB CHOELING
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
