import React from "react";
import "./ApiError.css";
import Typed from "react-typed";

const ApiError = () => {
  return (
    <div className="api-wrapper">
      <div className="message-container">
        <Typed
          strings={[
            "Coin Gecko API Error",
            "My WebApp is innocent",
            "Coin Gecko API subscription is too costly to buy",
            "Im poor !",
          ]}
          typeSpeed={120}
          backSpeed={25}
          loop
        />
      </div>
    </div>
  );
};

export default ApiError;
