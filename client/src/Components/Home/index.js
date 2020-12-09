import React from "react";
import { AboutMe } from "./AboutMe/index";
import { Youtube } from "./Youtube/index.js";
import { GlobalStyle } from "../../styles";
import { Contact } from "../Contact/index";
import { Footer } from "../Footer/index";
// import backdrop from "./Images/konoha_backdrop.png";
// import mobileBackdrop from "./Images/mobile_backdrop.jpeg";

function App() {
  return (
    <>
      {/* <GlobalStyle image={backdrop} mobile={mobileBackdrop} /> */}
      <div style={{ padding: "0, 200px" }}>
        <Youtube />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}

export default App;
