import React from "react";

function HomePage() {
  return (
    <div className="home">
      <div className="landingText">
        Fresh, plant-forward, earth friendly food.
      </div>
      <div className="langdingImgContainer">
        <img
          src="https://images.ctfassets.net/eum7w7yri3zr/y9vg76nLTUcftXMqAmWFF/c97f8698105cceb181e2481beef2e188/S5-2022-OLO-Chicken_Brussels-menu-banner.jpg?w=1600&q=75&fm=jpg&fl=progressive"
          alt=""
          className="landingImg"
        />
      </div>
    </div>
  );
}

export default HomePage;
