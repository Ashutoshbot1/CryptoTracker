import React, { useEffect, useState } from "react";
import "./ApiError.css";
import Typed from "react-typed";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ApiError = () => {
  const [count, setCount] = useState(65);
  const [style, setStyle] = useState({opacity: 0.5 });
  const navigate=useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count <= 0) {
        setStyle({opacity:1})
        clearInterval(intervalId);
      } else {
        setCount((prev) => prev - 1);
      }
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [count]);

  

  //Funtion
  function handleOnClick() {
    if(count>0){
      toast.error(`Please try after few seconds`);
    }
    else{
      console.log(window.location.pathname);
      // navigate(window.location.pathname);
      window.location.reload();
    }
  }
  return (
    <div className="api-wrapper">
      <div className="message-container">
        <Typed
          strings={[
            "Coin Gecko API Error 🚫",
            "My WebApp is innocent 🥺",
            "Coin Gecko API subscription is too costly 💲",
            "Im poor! 😞",
          ]}
          typeSpeed={120}
          backSpeed={25}
          loop
        />
      </div>
      <div className="btn-flex btn-abs">
        <Button
          text={count>0 ?`Reload page in ${count}s`:"Reload page"}
          outlined={true}
          style={style}
          onClick={handleOnClick}
        />
        <Button
          text={'Home page'}
          onClick={()=>navigate("/")}
        />
      </div>
    </div>
  );
};

export default ApiError;
