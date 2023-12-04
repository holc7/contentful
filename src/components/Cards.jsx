import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import sound from "../assets/icons8-sound.gif";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";

const Cards = () => {
  const [travelingBlog, setTravel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeGifUrls, setActiveGifUrls] = useState({});

  useEffect(() => {
    const SPACE_ID = "z09s5nbn4iqd";
    const ENVIRONMENT = "master";
    const ACCESS_TOKEN = "9TvzE_N_YhabHMBZGMkckN-fzWN6gWH87dDu5eFVPXQ";

    const client = createClient({
      space: SPACE_ID,
      environment: ENVIRONMENT,
      accessToken: ACCESS_TOKEN,
    });

    setLoading(true);
    client
      .getEntries([])
      .then((res) => {
        setTravel(res.items);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleImageClick = (cardId, gifUrl) => {
    setActiveGifUrls((prev) => ({
      ...prev,
      [cardId]: prev[cardId] === gifUrl ? null : gifUrl,
    }));
  };
  return (
    <>
      <AnimatePresence>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            exit={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Row className="card-container d-flex wide-row">
              {travelingBlog.map((travel) => {
                const cardId = travel.sys.id;
                const gifUrl = travel.fields.imageVideo?.fields.file.url;
                const imageUrl = travel.fields.image?.fields.file.url;

                return (
                  <Card
                    className="card-wrapper"
                    style={{ width: "18rem" }}
                    key={travel.sys.id}
                  >
                    <Card.Img
                      onClick={() => handleImageClick(cardId, gifUrl)}
                      className="profile-image"
                      variant="top"
                      src={activeGifUrls[cardId] || imageUrl}
                    />
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between">
                        <Card.Title style={{ fontWeight: "600" }}>
                          {travel.fields.countrytitle}
                        </Card.Title>
                        <img
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
                            const audioUrl =
                              travel.fields.sound?.fields.file.url;
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
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="read-more-button"
                        variant="primary"
                      >
                        READ MORE
                      </motion.button>
                    </Card.Body>
                  </Card>
                );
              })}
            </Row>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cards;
