import { useState } from "react";
import "./StaffSection.css";
import StaffCard from "./StaffCard";

function StaffSection() {

  const StaffList = [
    {
      name: "Nome Cognome",
      position: "Posizione",
      experience: "Esperienza",
      imgUrl: "./src/assets/avatar.jpg",
    },
    {
      name: "Nome Cognome",
      position: "Posizione",
      experience: "Esperienza",
      imgUrl: "./src/assets/avatar.jpg",
    },
    {
      name: "Nome Cognome",
      position: "Posizione",
      experience: "Esperienza",
      imgUrl: "./src/assets/avatar.jpg",
    },
    {
      name: "Nome Cognome",
      position: "Posizione",
      experience: "Esperienza",
      imgUrl: "./src/assets/avatar.jpg",
    }
  ];

  const [divOpacity, setDivOpacity] = useState("opacity-no");
  setTimeout(() => {
    setDivOpacity("opacity-no opacity-timing");
  }, 100);

  return (
    <>
      <div className="bg-personality p-4">
        <div className={"container mb-5 " + divOpacity}>
          <h2 className="text-center mb-4 text-white">Il nostro staff</h2>
          <div className="row">
            <div className="ms-auto col-12 d-flex flex-column flex-lg-row flex-wrap gap-5 justify-content-center align-items-center text-white">
              {StaffList.map((list) => {
                return (
                  <div className="staff-animation" key={Math.random()}>
                    <StaffCard staffName={list.name} staffPosition={list.position} staffExperience={list.experience} staffIMG={list.imgUrl} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default StaffSection;