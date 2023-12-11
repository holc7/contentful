import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { motion} from "framer-motion";



const CountryDetails = () => {

    const {travelfieldscountrytitle} = useParams()
    const navigate = useNavigate()

  return (
    <>
    <div>CountryDetails</div>

    <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="read-more-button"
                          variant="primary"
                          onClick={() => navigate(-1)}
                        >
                          Back to country overview
    </motion.button>
    </>
  )
}

export default CountryDetails