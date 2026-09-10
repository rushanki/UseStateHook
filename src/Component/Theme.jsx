import React, { useState } from "react";

const Theme = () => {
  const [clr, setClr] = useState("white");
  const [text, setText] = useState("black");

  return (
    <>
      <div style={{ backgroundColor: clr, color: text }}>
        <h1>Theme</h1>
        <button
          onClick={() => {
            [(setClr("black"), setText("white"))];
          }}
        >
          Dark Mode
        </button>
        <br></br>
        <button
          onClick={() => {
            [(setClr("gray"), setText("blue"))];
          }}
        >
          Light Mode
        </button>
      </div>
    </>
  );
};

export default Theme;
