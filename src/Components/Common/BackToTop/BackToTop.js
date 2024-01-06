import React from "react";
import "./BackToTop.css";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Tooltip } from "@mui/material";

const BackToTop = () => {
  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <Tooltip title="Back To Top">
      <div className="back-to-top-btn" id="myBtn" onClick={() => topFunction()}>
        <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
      </div>
    </Tooltip>
  );
};

export default BackToTop;
