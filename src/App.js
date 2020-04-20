import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import socketIO from "socket.io-client";

const App = () => {
  const [font, setFont] = useState("");
  const [endpoint] = useState("http://localhost:6969");

  const sendDataToServer = () => {
    const socket = socketIO(endpoint);

    socket.emit("change font", font);
  };

  const changeFont = (font) => {
    setFont(font);
    console.log(font);
  };

  useEffect(() => {
    const socket = socketIO(endpoint);
    socket.on("change font", (font) => {
      document.getElementById("finalResult").style.fontFamily = font;
    });
  });

  // font-family: 'Dancing Script', cursive;
  // font-family: 'Pacifico', cursive;
  // font-family: 'Bangers', cursive;

  return (
    <div className="App">
      <h1>FONT CHANGING BOI</h1>
      <ReactBootStrap.Button
        id="fontChangebutton"
        onClick={() => changeFont("'Dancing Script', cursive")}
        style={{ fontFamily: "Dancing Script, cursive" }}
        variant="info"
      >
        Change Font to 'Dancing Script', cursive
      </ReactBootStrap.Button>
      <ReactBootStrap.Button
        id="fontChangebutton"
        onClick={() => changeFont("Pacifico, cursive")}
        style={{ fontFamily: "Pacifico, cursive" }}
        variant="info"
      >
        Change Font to 'Pacifico', cursive
      </ReactBootStrap.Button>
      <ReactBootStrap.Button
        id="fontChangebutton"
        onClick={() => changeFont("Bangers, cursive")}
        style={{ fontFamily: "Bangers, cursive" }}
        variant="info"
      >
        Change Font to 'Bangers', cursive
      </ReactBootStrap.Button>
      <ReactBootStrap.Button
        id="fontChangebutton"
        onClick={() => sendDataToServer()}
        variant="success"
      >
        Change font
      </ReactBootStrap.Button>
      <h1 id="finalResult">WOW THIS IS YOUR FINAL RESULT!</h1>
    </div>
  );
};

export default App;
