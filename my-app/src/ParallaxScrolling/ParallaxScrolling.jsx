import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./ParallaxScrolling.css";
function ParallaxScrolling() {
  return (
    <div>
      <Parallax pages={2.5} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.8}>
          <div className="firstImg"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.0}>
          <h1>Welcome to my website</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <div className="secondImg"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2.0}>
          <h1>hello</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxScrolling;
