import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { createClient } from "contentful";

const CountryDetails = () => {
  const { entryid } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState([]);


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
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        console.log(res)
        console.log(entryid)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // const gifUrl = res.fields.imageVideo?.fields.file.url;
  // const imageUrl = res.fields.image?.fields.file.url;

  return (
    <>
      <h1>CountryDetails</h1> 

      <h1>{countryData.fields.countrytitle}</h1>

      {/* <img src={activeGifUrls[cardId] || imageUrl} alt="" /> */}
 

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
