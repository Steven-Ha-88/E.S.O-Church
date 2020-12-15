import React from "react";
import { AboutMe } from "./AboutMe/index";
import { Youtube } from "./Youtube/index.js";
// import { GlobalStyle } from "../../styles";
import { Contact } from "../Contact/index";
import { ImageWrapper } from "./styles";
import banner from "./../../Images/esomorning/backdrop.png";

function App() {
  return (
    <>
      {/* <GlobalStyle image={backdrop} mobile={mobileBackdrop} /> */}
      <div style={{ padding: "0, 200px" }}>
        {/* <ImageWrapper image={banner} /> */}
        <div style={{ width: "100vw" }}>
          <img
            style={{ marginTop: "-40px" }}
            width='100%'
            src={banner}
            alt='picture of church'
          />
        </div>
        <Youtube />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}

export default App;
