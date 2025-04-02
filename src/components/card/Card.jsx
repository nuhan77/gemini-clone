import React, { useContext } from "react";
import "./Card.css";
import { Context } from "../../conetexts/Context";

function Card(props) {
  const { request } = useContext(Context);
  return (
    <div className="card" onClick={() => request(props.text)}>
      <p>{props.text}</p>
      <div className="imgCon">
        <img src={props.image} />
      </div>
    </div>
  );
}

export default Card;
