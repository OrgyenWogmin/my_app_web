import React from "react";
import { Badge, Card, CardBody, Button, Row, Col, CardImg } from "reactstrap";
import { format } from "date-fns";
import { FiMapPin } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

const NewsCard = ({ data, index }) => {
  const formattedDate = format(data.date, "MMMM do, yyyy"); // Example: August 6th, 2025
  return (
    <Col md="3" key={`key-${index}`}>
      {" "}
      <Card className=" shadow border-0">
        <CardImg
          src={data.img}
          width="100%"
          height="100%"
          objectFit="cover"
        ></CardImg>
        <CardBody className="py-5">
          <h6 className="text-primary text-uppercase">{data.header}</h6>
          <p style={{ fontSize: "8px" }}>
            <span>
              <FaCalendarAlt />
            </span>

            {` ${formattedDate}`}
            <br />
            <span>
              <FiMapPin />
            </span>
            {` ${data.location}`}
          </p>
          <p className="description mt-3">{data.description}</p>
          <div>
            {data.tags.map((val) => (
              <Badge color="primary" pill className="mr-1">
                {val}
              </Badge>
            ))}
          </div>
          <Button
            className="mt-4"
            color="primary"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Learn more
          </Button>
        </CardBody>
      </Card>{" "}
    </Col>
  );
};

export default NewsCard;
