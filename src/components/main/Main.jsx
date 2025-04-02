import React, { useContext } from "react";
import "./Main.css";
import Card from "../card/Card";
import carsvg from "../../assets/car-svgrepo-com.svg";
import ballsvg from "../../assets/exercise-game-sport-tennis-training-svgrepo-com.svg";
import ideasvg from "../../assets/idea-svgrepo-com.svg";
import codesvg from "../../assets/code-svgrepo-com.svg";
import geminisvg from "../../assets/google-gemini-icon.webp";
import avatersvg from "../../assets/avatar-boy-svgrepo-com.svg";
import { Context } from "../../conetexts/Context";

function Main() {
  const cardsInfo = [
    { text: "Suggest me the best game to loose weight", icon: ballsvg },
    { text: "Show me the best value for money car available", icon: carsvg },
    { text: "What programing language is best for beginer", icon: codesvg },
    { text: "Show top 5 small business idea", icon: ideasvg },
  ];
  const { ifloading, ifrequest, input, request, answer, question } =
    useContext(Context);

  return (
    <div className="main">
      {!ifrequest ? (
        <div className="mainCon">
          <div className="textField">
            <span>Hello, Nawazesh</span>
            <p>How can I help you today?</p>
          </div>
          <div className="cardsCon">
            <div className="cards">
              {cardsInfo.map((info, i) => (
                <Card key={i} id="cards" text={info.text} image={info.icon} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="requestCon">
          <div className="questionCon">
            <img src={avatersvg} />
            <p>{question}</p>
          </div>
          <div className="ansCon">
            <img src={geminisvg} />
            {!ifloading ? (
              <p dangerouslySetInnerHTML={{ __html: answer }}></p>
            ) : (
              <div className="loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
