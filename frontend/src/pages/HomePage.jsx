import React from "react";
import landingImg from "../images/homePage.jpg";

function HomePage() {
  return (
    <div className="home">
      <div className="landingLeft">
        <img src={landingImg} alt="" className="landingImg" />
      </div>
      <div className="landingRight">
        <div className="landingText">
          Welcome. <br /> Satisfy sweet cravings with our new Crispy Rice Treat.
        </div>
      </div>
    </div>
  );
}

export default HomePage;
