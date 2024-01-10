import React, { useState } from "react";
import "./MainComponent.css";
import Button from "../../Common/Button/Button";
import iphone from "../../../assets/phone 1.png";
import gradient from "../../../assets/gradient 1.png";
import { motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Share from "../ShareComponent/Share";

const MainComponent = () => {
  const navigate = useNavigate();
  const currPageUrl = window.location.href;
  const [display, setDisplay] = useState("none");

  // handle toggle share
  function toggleShare() {
    console.log("toggle executed");
    setDisplay(display === "none" ? "block" : "none");
    console.log(display);
  }

  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="track-crypto-heading"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="real-time-heading"
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button
            text={"Dashboard"}
            onClick={() => {
              navigate("/dashboard");
            }}
          />
          <Button text={"Share"} outlined={true} onClick={toggleShare} />

          <Share setDisplay={setDisplay} display={display} />
        </motion.div>
      </div>

      <div className="phone-container">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={iphone}
          alt="phone"
          className="iphone"
        />
        <img src={gradient} alt="gradient" className="gradient" />
      </div>
    </div>
  );
};

export default MainComponent;
