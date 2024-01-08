import React, { useState } from "react";
import "./CoinInfo.css";
import { DescriptionOutlined } from "@mui/icons-material";

const CoinInfo = ({ heading, desc }) => {
  const [longDesc, setLongDesc] = useState(false);
  const shortDesc =
    desc.slice(0, 200) +
    "<span className='short-desc-span'> Read More...</span>";

  const fullDesc = desc + "<span className='long-desc-span'> Read Less</span>";

  // Toggle Long Desc
  function toggleLongDesc() {
    setLongDesc(!longDesc);
  }

  return (
    <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 350 ? (
        <p
          onClick={toggleLongDesc}
          className="coin-info-description"
          dangerouslySetInnerHTML={{ __html: longDesc ? fullDesc : shortDesc }}
        ></p>
      ) : (
        <p
          className="coin-info-description"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      )}
    </div>
  );
};

export default CoinInfo;
