import React, { useEffect, useState } from "react";
import "./ApiError.css";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


const ApiError = ({getData}) => {
  const [count, setCount] = useState(65);
  const [style, setStyle] = useState({ opacity: 0.5 });
  const navigate = useNavigate();


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count <= 0) {
        setStyle({ opacity: 1 });
        clearInterval(intervalId);
      } else {
        setCount((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  //Funtion
  function handleOnClick() {
    if (count > 0) {
      toast.error(`Please try after few seconds`);
    } else {
      getData()
    }
  }
  return (
    <div className="api-wrapper">
      <div className="message-container">
        <TypeAnimation
          sequence={[
            "Coin Gecko API Error 🚫",1000,
            "My WebApp is Innocent 🥺",1000,
            "Coin Gecko API Subscription is Too Costly💲",1000,
            "Im Poor! 😞",1000
          ]}
          style={{ fontSize: "1.5rem", transition:"all .3s" }}
          repeat={Infinity}
          speed={{type: 'keyStrokeDelayInMs', value: 120}}
          deletionSpeed={10}
        />
      </div>

      <div className="btn-flex btn-abs">
        <Button
          text={count > 0 ? `Reload page in ${count}s` : "Reload page"}
          outlined={true}
          style={style}
          onClick={handleOnClick}
        />
        <Button text={"Home page"} onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default ApiError;
