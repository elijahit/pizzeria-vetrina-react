import { useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [divOpacity, setDivOpacity] = useState("opacity-no");
  setTimeout(() => {
    setDivOpacity("opacity-no opacity-timing");
  }, 100);

  return (
    <div className="container-fluid first-section mb-5">
      <div className="container">
        <div className="row h-100">
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">

          </div>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className={"text-white text-center fs-4 " + divOpacity}>LA TRADIZIONE NELLE TUE MANI</h2>
            <p className={"fs-4 text-white text-center text-lg-start ps-lg-4 " + divOpacity}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, dolores!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;