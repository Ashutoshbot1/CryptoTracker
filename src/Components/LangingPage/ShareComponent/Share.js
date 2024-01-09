import React from "react";
import "./Share.css";
import { Tooltip } from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { motion } from "framer-motion";
import {
  EmailShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Share = ({ display, setDisplay }) => {
  const url = window.location.href;
  return (
    <div className="share-wrapper" style={{ display: display }}>
      <div className="share-buttons">
        <div className="cancel-btn" onClick={() => setDisplay("none")}>
          <Tooltip title="Close">
            <HighlightOffRoundedIcon />
          </Tooltip>
        </div>
        <motion.div 
        initial={{ x: -3 }}
        animate={{ x: 3 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        className="mail share-button"
         onClick={() => setDisplay("none")}>
          <EmailShareButton url={url}>
            <EmailIcon />
          </EmailShareButton>
        </motion.div>
        <motion.div 
        initial={{ x: -3 }}
        animate={{ x: 3 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        className="mail share-button"
         onClick={() => setDisplay("none")}>
          <FacebookShareButton url={url}>
            <FacebookIcon />
          </FacebookShareButton>
        </motion.div>
        <motion.div 
        initial={{ x: -3 }}
        animate={{ x: 3 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        className="mail share-button"
         onClick={() => setDisplay("none")}>
          <WhatsappShareButton
            url={url}
            title="Check out this awesome crypto-tracker webapp, made by Ashutosh Singh"
          >
            <WhatsappIcon />
          </WhatsappShareButton>
        </motion.div>
        <motion.div 
        initial={{ x: -3 }}
        animate={{ x: 3 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        className="mail share-button"
         onClick={() => setDisplay("none")}>
          <LinkedinShareButton url={url}>
            <LinkedinIcon />
          </LinkedinShareButton>
        </motion.div>
        <motion.div 
        initial={{ x: -3 }}
        animate={{ x: 3 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        className="mail share-button"
         onClick={() => setDisplay("none")}>
          <TwitterShareButton url={url}>
            <TwitterIcon />
          </TwitterShareButton>
        </motion.div>
        <motion.div 
        initial={{ x: -3 }}
        animate={{ x: 3 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        className="mail share-button"
         onClick={() => setDisplay("none")}>
          <TelegramShareButton url={url}>
            <TelegramIcon />
          </TelegramShareButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Share;
