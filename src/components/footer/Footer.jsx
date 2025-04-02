import React, { useContext, useState, useEffect } from "react";
import "./Footer.css";
import imgsvg from "../../assets/image-plus-svgrepo-com.svg";
import micsvf from "../../assets/microphone-alt-1-svgrepo-com.svg";
import sendsvg from "../../assets/send-alt-1-svgrepo-com.svg";
import { Context } from "../../conetexts/Context";

function Footer() {
  const [focused, setFocused] = useState(false);
  const { input, setinput, request } = useContext(Context);

  const inputField = document.getElementById("inputField");
  useEffect(() => {
    document.getElementById("input").focus();
  }, []);

  if (focused) {
    document.onclick = (e) => {
      if (!inputField.contains(e.target)) {
        setFocused(false);
      }
    };
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    request(input);
  };
  return (
    <div className="footer">
      <form
        onSubmit={handelSubmit}
        className="inputField"
        id="inputField"
        style={
          focused
            ? { background: "rgb(235, 239, 244)" }
            : { background: "rgb(240, 244, 249)" }
        }
      >
        <input
          type="text"
          id="input"
          onChange={(e) => setinput(e.target.value)}
          value={input}
          onFocus={() => {
            setFocused(true);
          }}
          placeholder="Enter a Prompt Here"
        />
        <div className="icons">
          <div className="imgsvg">
            <img src={imgsvg} />
          </div>
          <div className="micsvg">
            <img src={micsvf} />
          </div>
          <button className="sendsvg">
            <img src={sendsvg} />
          </button>
        </div>
      </form>
      <p>
        Gemini may display inaccurate info, including about people, so
        double-check its responses. <u>Your privacy & Gemini Apps</u>
      </p>
    </div>
  );
}

export default Footer;
