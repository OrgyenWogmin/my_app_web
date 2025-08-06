import React from "react";
import { Button, Row, Col, UncontrolledCarousel, Container } from "reactstrap";
import "./home.css";
import NewsCard from "./NewsCard";

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
  const newArr = [
    {
      header: "news heading",
      date: new Date(),
      description: "small description",
      content: "longer description",
      img: require("../../assets/img/theme/rinpoche monastery.jpeg"),
      images: [
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
      ],
      tags: ["construction", "work", "meeting"],
      location: "india",
    },
    {
      header: "news heading2",
      date: new Date(),
      description: "small description2",
      content: "longer description",
      img: require("../../assets/img/theme/rinpoche monastery.jpeg"),
      images: [
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
      ],
      tags: ["prayers", "lama", "meeting"],
      location: "india",
    },
    {
      header: "news heading3",
      date: new Date(),
      description: "small description",
      content: "longer description",
      img: require("../../assets/img/theme/rinpoche monastery.jpeg"),
      images: [
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
      ],
      tags: ["hdd", "team work", "meeting"],
      location: "india",
    },
    {
      header: "news heading4",
      date: new Date(),
      description: "small description",
      content: "longer description",
      img: require("../../assets/img/theme/rinpoche monastery.jpeg"),
      images: [
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
      ],
      tags: ["construction", "work", "meeting"],
      location: "singapore",
    },
    {
      header: "news heading5",
      date: new Date(),
      description: "small description",
      content: "longer description",
      img: require("../../assets/img/theme/rinpoche monastery.jpeg"),
      images: [
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
        require("../../assets/img/theme/rinpoche monastery.jpeg"),
      ],
      tags: ["just", "work", "meeting"],
      location: "india",
    },
  ];
  return (
    <div className="m-5">
      <div className="overflow-hidden hero-container">
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
      <div className="py-lg">
        <Row className="justify-content-center align-items-center ">
          <Col className="mb-5 mb-lg-0" lg="5">
            <h1 className="text-primary font-weight-light">OUR BEGINNINGS</h1>
            <p className=" mt-4 ">
              In the year 2003, His Holiness Pema Norbu Rinpoche had visited
              Luing Gonpa, Dirang. During his visit, the Tsechu Tsogpa, Dirang
              paid a visit to seek his blessing with the soil sample with an aim
              to build a statue/gonpa of Guru Rinpoche. His Holiness Penor
              Rinpoche after performing the consecration rituals on the soil,
              blessed us with his encouraging words on work undertaken by the
              Tsechu Tsogpa. Soon Tsechu Tsogpa started with the foundation
              laying work but sadly due to various obstacles and impediments,
              they were not able to continue the construction and had to stop it
              temporarily. After various efforts and deliberation, Lama Lobsang
              Dhargey has decided to resume the construction work of the statue
              of Guru Rinpoche on the auspicious day - 10th day of 5th month of
              Tibetan calendar(9th July 2023).
            </p>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <div className="rounded shadow-lg overflow-hidden ">
              <UncontrolledCarousel items={items} />
            </div>
          </Col>
        </Row>
      </div>
      <div className="py-lg">
        <Row className="justify-content-between align-items-center">
          <Col className="mb-lg-auto" lg="6">
            <Row>
              <Col>
                <img
                  alt="Sample"
                  className="object-fit-img"
                  src={require("../../assets/img/theme/rinpoche monastery.jpeg")}
                ></img>
              </Col>
              <Col>
                <img
                  alt="Sample"
                  className="object-fit-img"
                  src={require("../../assets/img/theme/rinpoche monastery.jpeg")}
                ></img>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <img
                  alt="Sample"
                  className="object-fit-img"
                  src={require("../../assets/img/theme/rinpoche monastery.jpeg")}
                ></img>
              </Col>
              <Col>
                <img
                  alt="Sample"
                  className="object-fit-img"
                  src={require("../../assets/img/theme/rinpoche monastery.jpeg")}
                ></img>
              </Col>
            </Row>
          </Col>
          <Col className="mb-5 mb-lg-0" lg="5">
            <p className=" mt-4 ">
              <span className="text-primary font-weight-bold font-size-50">
                Lama Lobsang Dhargey
              </span>{" "}
              will be heading this project. Initially when senior lamas
              requested him to take the responsibility of the Guru statue
              project, He was bit hesitant considering the responsibility
              involved for such a big project. But with their repeated request
              overtime, trust in him and the benefits it could have to the
              people of Dirang and the region at large, He eventually accepted
              the responsibility. Soon after, He requested His Holiness Sakya
              Trizin Rinpoche and His Eminence Sonam Gyatso Rinpoche for a
              divination regarding the project and it revealed once completed,
              the project would be of a huge beneficial. The revelation
              instantly made him realized about the merits and devotion of the
              people of Dirang Circle towards the Dharma. Encouraged by this
              revelation and support of the people of Dirang Circle, We resumed
              the construction work of the statue of Guru Rinpoche on the
              auspicious day - 10th day of 5th month of Tibetan calendar.(9th
              July 2023).
            </p>
          </Col>
        </Row>
        <div className="py-lg ">
          <h3 className="text-primary font-weight-bold ">News</h3>
          <Row className="horizontal-scrollable-row">
            {newArr
              ? newArr.map((data, index) => {
                  return <NewsCard data={data} index={index} />;
                })
              : null}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
