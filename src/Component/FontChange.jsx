import React, { useState } from "react";

const FontChange = () => {
  const [font, setFont] = useState(20);

  return (
    <>
      <div>
        <h1
          className="text-center text-warning bg-dark p-3"
          style={{ fontSize: font }}
        >
          {" "}
          Welcome
        </h1>
        <button
          onClick={() => {
            setFont(font + 1);
          }}
        >
          font ++
        </button>

        <button
          onClick={() => {
            setFont(font - 1);
          }}
        >
          font --
        </button>
      </div>
    </>
  );
};

export default FontChange;
