import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import Logo from "../../assets/logo1.png";
import { Row } from "react-bootstrap";

const About = () => {
  return (
    <Row className="card-container d-flex wide-row">
    <motion.div
      className="col-xl-4 col-lg-5 col-md-6 col-custom"
    >
      <Card className="card-wrapper" style={{ width: "10%" }}>
        <Card.Img className="profile-image" variant="top" src={Logo} />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <Card.Title style={{ fontWeight: "600" }}>Denis</Card.Title>
          </div>
          <Card.Text className="text-wrapper">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            illo doloribus numquam molestiae, eligendi illum ullam atque magni
            ad inventore accusamus! Vero itaque magni saepe!
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>

    <motion.div
      className="col-xl-4 col-lg-5 col-md-6 col-custom"
    >
      <Card className="card-wrapper" style={{ width: "10%" }}>
        <Card.Img className="profile-image" variant="top" src={Logo} />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <Card.Title style={{ fontWeight: "600" }}>Naeem</Card.Title>
          </div>
          <Card.Text className="text-wrapper">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            illo doloribus numquam molestiae, eligendi illum ullam atque magni
            ad inventore accusamus! Vero itaque magni saepe!
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>

    <motion.div
      className="col-xl-4 col-lg-5 col-md-6 col-custom"
    >
      <Card className="card-wrapper" style={{ width: "10%" }}>
        <Card.Img className="profile-image" variant="top" src={Logo} />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <Card.Title style={{ fontWeight: "600" }}>Valentijn</Card.Title>
          </div>
          <Card.Text className="text-wrapper">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            illo doloribus numquam molestiae, eligendi illum ullam atque magni
            ad inventore accusamus! Vero itaque magni saepe!
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
    </Row>
  );
};

export default About;
