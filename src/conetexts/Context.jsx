import React, { useState, createContext } from "react";
import run from "../apis/gemeniApi";
import { isFocusable } from "@testing-library/user-event/dist/utils";

export const Context = createContext();

const ContextProvider = (props) => {
  const [ifsidebar, setifsidebar] = useState(true);
  const [ifloading, setifloading] = useState(false);
  const [ifrequest, setifrequest] = useState(false);
  const [input, setinput] = useState("");
  const [answer, setanswer] = useState("");
  const [question, setquestion] = useState("");
  const [history, sethistory] = useState([]);

  const addTypingEffect = (text, index) => {
    setTimeout(() => {
      setanswer((prev) => prev + text + " ");
    }, 50 * index);
  };

  const request = async (text) => {
    setanswer("");
    setifrequest(true);
    setifloading(true);
    setquestion(text);

    const response = await run(text);
    const resArr = response.split("**");
    let newres = "";
    for (let i = 0; i < resArr.length; i++) {
      if (i % 2 == 0) {
        newres += resArr[i];
      } else {
        newres += `<b>${resArr[i]}</b>`;
      }
    }
    let finalRes = newres.split("*").join("<br>");
    let finalArr = finalRes.split(" ");
    for (let i = 0; i < finalArr.length; i++) {
      addTypingEffect(finalArr[i], i);
    }

    setifloading(false);
    setinput("");
    sethistory((prev) => [text, ...prev]);
    if (history.length > 11) {
      history.pop();
    }
  };

  const values = {
    ifloading,
    setifloading,
    ifsidebar,
    setifsidebar,
    setifrequest,
    ifrequest,
    input,
    setinput,
    answer,
    request,
    question,
    setquestion,
    history,
  };
  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};

export default ContextProvider;
