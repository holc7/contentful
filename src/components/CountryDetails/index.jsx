import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { createClient } from "contentful";
import "./CountryDetails.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import CountUp from "react-countup";

const CountryDetails = () => {
  const { entryid } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState(null);

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
      .getEntry(entryid)
      .then((res) => {
        setCountryData(res);
        setLoading(false);
        console.log(res);
        console.log(entryid);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [entryid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {countryData && countryData.fields && (
        <Container>
          <div className="countrydetails">
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <div className="name-population d-flex align-items-center justify-content-between">
                  <img
                    src={countryData.fields.countryFlag?.fields.file.url}
                    alt="Country Flag"
                  />{" "}
                  <h1 className="countrydetails-headline-h1">
                    {countryData.fields.countrytitle}
                  </h1>
                  <h1>
                    Population - {""}
                    <CountUp
                      start={0}
                      end={countryData.fields.population}
                      duration={2.75}
                      separator=","
                    />
                    (2021)
                  </h1>
                </div>
              </Col>
            </Row>
            <Row className="row-p-img align-items-center">
              <Col>
                <h2>{countryData.fields.paragraphTitle}</h2>
                <p>{countryData.fields.firstParagraph}</p>
              </Col>
              <Col>
                <Image
                  className="country-images"
                  src={countryData.fields.morePictures[0].fields.file.url}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>

            <Row className="row-p-img align-items-center">
              <Col>
                <Image
                  className="country-images"
                  src={countryData.fields.morePictures[1].fields.file.url}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <h2>{countryData.fields.paragraphTitle}</h2>
                <p>{countryData.fields.secondParagraph}</p>
              </Col>
            </Row>

            <Row className="row-p-img-quote align-items-center">
              <Col>
                <div className="countrydetails-body-quote">
                  <h3>{documentToReactComponents(countryData.fields.body)}</h3>
                </div>
              </Col>
            </Row>

            <Row className="row-p-img align-items-center">
              <Col>
                <h2>{countryData.fields.paragraphTitle}</h2>
                <p>{countryData.fields.thirdParagraph}</p>
              </Col>
              <Col>
                <Image
                  className="country-images"
                  src={countryData.fields.morePictures[2].fields.file.url}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <Row className="row-p-img align-items-center">
              <Col>
                <Image
                  className="country-images"
                  src={countryData.fields.morePictures[3].fields.file.url}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <h2>{countryData.fields.paragraphTitle}</h2>
                <p>{countryData.fields.fourthParagraph}</p>
              </Col>
            </Row>

            <Row className="row-p-img-map">
              <Col>
                <MapContainer
                  center={[
                    countryData.fields.location.lat,
                    countryData.fields.location.lon,
                  ]}
                  zoom={5}
                  scrollWheelZoom={false}
                  className="countrydetails-map"
                  style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </Col>
            </Row>
          </div>
        </Container>
      )}

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="read-more-button countrydetails-read-more-button"
        variant="primary"
        onClick={() => navigate(-1)}
      >
        <span className="material-symbols-outlined">arrow_back</span>
        <span className="countrydetails-button-back">
          Back to country overview
        </span>
      </motion.button>
    </>
  );
};

export default CountryDetails;
