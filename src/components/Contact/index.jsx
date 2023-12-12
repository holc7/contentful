import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <form className="d-flex flex-column justify-content-center align-items-center form-wrapper">
        <h2>CONTACT US</h2>

        <input className="form-input" type="name" placeholder="Name..." />

        <input
          className="form-input"
          type="email"
          placeholder="Email address..."
        />

        <textarea
          className="form-textarea"
          name="message"
          cols="24"
          rows="10"
          placeholder="Your message..."
        ></textarea>
        <motion.div className="button-div" whileTap={{ scale: 0.9 }}>
          <button
            onClick={(e) => e.preventDefault()}
            className="send-button"
            type="submit"
          >
            SEND
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default Contact;
