import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import StateClass from "./Component/StateClass";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import UseStateHook from "./Component/UseStateHook.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./Component/Theme.jsx";
import Show from "./Component/Show.jsx";
import FontChange from "./Component/FontChange.jsx";

function App() {
  // let { inVisible, setInVisible } = useState(false);
  return (
    <>
      {/* {inVisible ? <Show /> : <h1>Component Hide</h1>}
      <button onClick={() => setInVisible(!inVisible)}>
        Show/Hide Demp Coponent
      </button> */}

      {/* <StateClass /><br></br> */}
      <Theme />
      <BrowserRouter>
        <Routes>
          <Route path="/useStateHook" element={<UseStateHook />} />
        </Routes>
      </BrowserRouter>
      <FontChange />
    </>
  );
}

export default App;
