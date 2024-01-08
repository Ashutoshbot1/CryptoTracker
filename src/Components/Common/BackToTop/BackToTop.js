import React, { useEffect } from "react";
import "./BackToTop.css";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Tooltip } from "@mui/material";

const BackToTop = () => {
  useEffect(() => {
    // Get the button after the component has mounted:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    };

    // Attach the scroll event listener after the component has mounted:
    window.addEventListener("scroll", scrollFunction);

    // Remove the event listener when the component is unmounted:
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };

  return (
    <Tooltip title="Back To Top">
      <div className="back-to-top-btn" id="myBtn" onClick={topFunction}>
        <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
      </div>
    </Tooltip>
  );
};

export default BackToTop;
