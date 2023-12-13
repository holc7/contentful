import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import person from "../../assets/icons8-person.png";
import { Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Row className="card-container-about d-flex justify-content-center wide-row">
      <motion.div className="col-xl-4 col-lg-5 col-md-6 col-custom ">
        <Card className="card-wrapper about-wrapper " style={{ width: "10%" }}>
          <Card.Img
            className="profile-image"
            variant="top"
            src={person}
            style={{ width: "250px", height: "250px" }}
          />
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title
                style={{
                  fontWeight: "600",
                  margin: "auto",
                  paddingBottom: "5px",
                }}
              >
                Denis
              </Card.Title>
            </div>
            <Card.Text className="text-wrapper">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              illo doloribus numquam molestiae, eligendi illum ullam atque magni
              ad inventore accusamus! Vero itaque magni saepe!
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>

      <motion.div className="col-xl-4 col-lg-5 col-md-6 col-custom">
        <Card className="card-wrapper about-wrapper " style={{ width: "10%" }}>
          <Card.Img
            className="profile-image"
            variant="top"
            src={person}
            style={{ width: "250px", height: "250px" }}
          />
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title
                style={{
                  fontWeight: "600",
                  margin: "auto",
                  paddingBottom: "5px",
                }}
              >
                Naeem
              </Card.Title>
            </div>
            <Card.Text className="text-wrapper">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              illo doloribus numquam molestiae, eligendi illum ullam atque magni
              ad inventore accusamus! Vero itaque magni saepe!
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>

      <motion.div className="col-xl-4 col-lg-5 col-md-6 col-custom">
        <Card className="card-wrapper about-wrapper " style={{ width: "10%" }}>
          <Card.Img
            className="profile-image"
            variant="top"
            src={person}
            style={{ width: "250px", height: "250px" }}
          />
          <Card.Body>
            <div className="d-flex align-items-center  justify-content-between">
              <Card.Title
                style={{
                  fontWeight: "600",
                  margin: "auto",
                  paddingBottom: "5px",
                }}
              >
                Valentijn
              </Card.Title>
            </div>
            <Card.Text className="text-wrapper">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              illo doloribus numquam molestiae, eligendi illum ullam atque magni
              ad inventore accusamus! Vero itaque magni saepe!
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
      <div className="invisible-element-about"></div>
    </Row>
  );
};

export default About;
