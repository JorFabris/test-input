import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const CHARS_ALLOWED = 10;

function App() {
  const [count, setCount] = useState(CHARS_ALLOWED);
  const [dataAllowed, setDataAllowed] = useState("");
  const [dataOverage, setDataOverage] = useState("");

  function handleContainer(value: string) {
    let content = value;
    setCount(CHARS_ALLOWED - content.length);

    if (count >= 0 && count <= CHARS_ALLOWED) {
      setDataAllowed(content.slice(0, CHARS_ALLOWED));
    }

    if (count < 0) {
      setDataOverage(content.slice(CHARS_ALLOWED, content.length));
    }
  }

  const refInput = () => {
    const ref = document.getElementById("inputRef");
    ref?.focus();
  };

  return (
    <div style={{}}>
      <input
        id="inputRef"
        className="input"
        onChange={({ target: { value } }) => handleContainer(value)}
      />
      <div
        style={{
          borderWidth: 1,
          marginTop: 30,
          marginLeft: 100,
          border: "solid",
          height: 100,
          width: "50%",
          position: "relative",
        }}
        onClick={refInput}
      >
        {
          <p style={{ display: "inline-block" }}>
            {dataAllowed}
            <p
              style={{
                display: "inline-block",
                background: "rgba(255, 0, 0, 0.3)",
              }}
            >
              {dataOverage}
            </p>
          </p>
        }
        <div
          style={{
            height: 15,
            marginLeft: 5,
            width: 1,
            background: "black",
            display: "inline-block",
          }}
        />
      </div>

      <p
        style={
          count < 0
            ? { color: "red", marginLeft: "90%", marginBottom: "0.3rem" }
            : { marginLeft: "90%" }
        }
      >
        {count}
      </p>
      {count < 0 ? (
        <p
          style={{
            color: "red",
            position: "absolute",
            bottom: "0.3rem",
            left: "0.3rem",
          }}
        >
          Too many char{" "}
        </p>
      ) : null}
    </div>
  );
}

export default App;
