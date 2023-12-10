import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import sound from "../assets/icons8-sound.gif";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
import loadingAnimation from "../assets/loadingAnimation.json";
import Lottie from "lottie-react";

const Cards = () => {
  const [travelingBlog, setTravel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeGifUrls, setActiveGifUrls] = useState({});

  useEffect(() => {
    const SPACE_ID = import.meta.env.VITE_SPACE_ID;
    const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;
    const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

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
        }, 2000);
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
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <section>
        <h1 className="cities-wrapper">COUNTRIES</h1>
      </section>
      <AnimatePresence>
        {loading ? (
          <div className="lottie-loading">
            <Lottie
              animationData={loadingAnimation}
              style={{ width: "620px" }}
            />
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={cardVariants}
            transition={{ staggerChildren: 0.3 }}
          >
            <Row className="card-container d-flex wide-row">
              {travelingBlog.map((travel) => {
                const cardId = travel.sys.id;
                const gifUrl = travel.fields.imageVideo?.fields.file.url;
                const imageUrl = travel.fields.image?.fields.file.url;

                return (
                  <motion.div
                    className="col-xl-4 col-lg-5 col-md-6 col-custom"
                    key={travel.sys.id}
                    variants={cardVariants}
                  >
                    <Card className="card-wrapper" style={{ width: "10%" }}>
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
                  </motion.div>
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
