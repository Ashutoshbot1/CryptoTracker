import React from "react";
import "./Share.css";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
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
    <div className="share-wrapper" style={{display:display}}>
      <div className="share-buttons">
        <div className="cancel-btn" onClick={()=>setDisplay("none")}>
          <HighlightOffRoundedIcon />
        </div>
        <div className="mail share-button" onClick={()=>setDisplay("none")}>
          <EmailShareButton url={url}>
            <EmailIcon />
          </EmailShareButton>
        </div>
        <div className="fb share-button" onClick={()=>setDisplay("none")}>
          <FacebookShareButton url={url}>
            <FacebookIcon />
          </FacebookShareButton>
        </div>
        <div className="whatsapp share-button" onClick={()=>setDisplay("none")}>
          <WhatsappShareButton url={url} title="Check out this awesome crypto-tracker webapp, made by Ashutosh Singh">
            <WhatsappIcon />
          </WhatsappShareButton>
        </div>
        <div className="in share-button" onClick={()=>setDisplay("none")}>
          <LinkedinShareButton url={url}>
            <LinkedinIcon />
          </LinkedinShareButton>
        </div>
        <div className="twit share-button" onClick={()=>setDisplay("none")}>
          <TwitterShareButton url={url}>
            <TwitterIcon />
          </TwitterShareButton>
        </div>
        <div className="tele share-button" onClick={()=>setDisplay("none")}>
          <TelegramShareButton url={url}>
            <TelegramIcon />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
};

export default Share;
