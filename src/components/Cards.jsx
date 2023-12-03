import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import sound from "../assets/icons8-sound.gif";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Cards = () => {
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    const SPACE_ID = "z09s5nbn4iqd";
    const ENVIROMENT = "master";
    const ACCESS_TOKEN = "9TvzE_N_YhabHMBZGMkckN-fzWN6gWH87dDu5eFVPXQ";

    const client = createClient({
      space: SPACE_ID,
      environment: ENVIROMENT,
      accessToken: ACCESS_TOKEN,
    })
      .getEntries([])
      .then((res) => setTravel(res.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Row className="card-container d-flex wide-row">
        {travel.map((travel) => (
          <Card
            className="card-wrapper"
            style={{ width: "18rem" }}
            key={travel.sys.id}
          >
            <Card.Img
              className="profile-image"
              variant="top"
              src={
                travel.fields.image
                  ? travel.fields.image.fields.file.url
                  : "default-image-url"
              }
            />{" "}
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <Card.Title style={{ fontWeight: "600" }}>
                  {travel.fields.countrytitle}
                </Card.Title>
                <img
                  onClick={() => {
                    const audioUrl = travel.fields.sound?.fields.file.url;
                    if (audioUrl) {
                      const audio = new Audio(audioUrl);
                      audio.play();
                    }
                  }}
                  className="sound-image"
                  src={travel.fields.lottieAnimation?.fields.file.url}
                  alt="sound"
                  style={{
                    width: "60px",
                    padding: "0",
                  }}
                />
                <img
                  onClick={() => {
                    const audioUrl = travel.fields.sound?.fields.file.url;
                    if (audioUrl) {
                      const audio = new Audio(audioUrl);
                      audio.play();
                    }
                  }}
                  className="sound-image"
                  src={sound}
                  alt="sound"
                  style={{
                    width: "60px",
                    padding: "0",
                  }}
                />
              </div>
              <Card.Text className="text-wrapper">
                {documentToReactComponents(travel.fields.body)}
              </Card.Text>
              <Button className="read-more-button" variant="primary">
                READ MORE
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
};

export default Cards;
