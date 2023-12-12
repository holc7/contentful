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
              <Col>
                <Image
                  src={countryData.fields.image?.fields.file.url}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
              <h1 className="countrydetails-headline-h1">
              {countryData.fields.countrytitle}
            </h1>
              </Col>
            </Row>
            {documentToReactComponents(countryData.fields.body)}
            <Row>
              <Col>
                <p>{countryData.fields.firstParagraph}</p>
              </Col>
              <Col>
                <Image
                  src={countryData.fields.morePictures[0].fields.file.url}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image
                  src={countryData.fields.morePictures[1].fields.file.url}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <p>{countryData.fields.secondParagraph}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{countryData.fields.thirdParagraph}</p>
              </Col>
              <Col>
                <Image
                  src={countryData.fields.morePictures[2].fields.file.url}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image
                  src={countryData.fields.morePictures[3].fields.file.url}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <p>{countryData.fields.fourthParagraph}</p>
              </Col>
            </Row>
          </div>
        </Container>
      )}

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="read-more-button"
        variant="primary"
        onClick={() => navigate(-1)}
      >
        Back to country overview
      </motion.button>
    </>
  );
};

export default CountryDetails;
