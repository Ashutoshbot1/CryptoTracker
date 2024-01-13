import React from "react";
import './EmotyList.css'
import Button from "../Common/Button/Button";
import { useNavigate } from "react-router-dom";

const EmptyList = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyList-container">
      <p className="message">You have nothing in your watchlist</p>
      <div className="btn-flex">
        <Button text={"Dashboard"} onClick={() => navigate("/dashboard")} />
        <Button text={"Home"} onClick={()=>navigate('/')} outlined={true}/>
      </div>
    </div>
  );
};

export default EmptyList;
