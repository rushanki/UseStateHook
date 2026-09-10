import React, { useState } from "react";

const UseStateHook = () => {
  const [count, SetCount] = useState(0);
  // const [Count, SetCount] = useState(0);

  return (
    <div className="w-50 mx-auto border border-secondary rounded-4 d-flex flex-column">
      <h1 className="text-center text-warning bg-dark p-3">
        UseState hook in Functional Component
      </h1>
      <h1 className="text-ceneter">Counter:{count}</h1>
      <button
        onClick={() => {
          SetCount(count + 1);
          console.log("count has increases");
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          SetCount(count - 1);
        }}
      >
        Decreases
      </button>
    </div>
  );
};

export default UseStateHook;
